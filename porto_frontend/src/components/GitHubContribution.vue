<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
const wrapperRef = ref(null)

const COLS = 52
const ROWS = 7
const CELL_SIZE = 12
const CELL_GAP = 3
const TOTAL = CELL_SIZE + CELL_GAP

// GitHub dark theme contribution colors
const LEVEL_COLORS = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
const SNAKE_HEAD_COLOR = '#f78166'
const SNAKE_BODY_COLOR = '#ff9580'

let grid = []
let path = []
let snakePos = 0
let snakeLength = 10
let snakeCells = []
let animId = null
let frameCounter = 0
let scale = 1

function generateGrid() {
  grid = []
  for (let c = 0; c < COLS; c++) {
    const col = []
    for (let r = 0; r < ROWS; r++) {
      const rand = Math.random()
      let level = 0
      if (rand > 0.55) level = 1
      if (rand > 0.70) level = 2
      if (rand > 0.82) level = 3
      if (rand > 0.92) level = 4
      col.push(level)
    }
    grid.push(col)
  }
}

function generatePath() {
  path = []
  for (let c = 0; c < COLS; c++) {
    if (c % 2 === 0) {
      for (let r = 0; r < ROWS; r++) path.push([c, r])
    } else {
      for (let r = ROWS - 1; r >= 0; r--) path.push([c, r])
    }
  }
}

function drawRoundRect(ctx, x, y, w, h, r) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.arcTo(x + w, y, x + w, y + r, r)
  ctx.lineTo(x + w, y + h - r)
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r)
  ctx.lineTo(x + r, y + h)
  ctx.arcTo(x, y + h, x, y + h - r, r)
  ctx.lineTo(x, y + r)
  ctx.arcTo(x, y, x + r, y, r)
  ctx.closePath()
  ctx.fill()
}

function drawFrame(ctx) {
  const canvas = canvasRef.value
  if (!canvas) return

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // Draw all grid cells
  for (let c = 0; c < COLS; c++) {
    for (let r = 0; r < ROWS; r++) {
      const x = c * TOTAL
      const y = r * TOTAL
      ctx.fillStyle = LEVEL_COLORS[grid[c][r]]
      drawRoundRect(ctx, x, y, CELL_SIZE, CELL_SIZE, 2)
    }
  }

  // Draw snake body (from tail to head so head renders on top)
  const bodySlice = [...snakeCells].reverse()
  bodySlice.forEach((idx, revI) => {
    const i = snakeCells.length - 1 - revI
    if (idx < 0 || idx >= path.length) return
    const [c, r] = path[idx]
    const x = c * TOTAL
    const y = r * TOTAL

    if (i === 0) {
      // Head
      ctx.fillStyle = SNAKE_HEAD_COLOR
      ctx.globalAlpha = 1
      drawRoundRect(ctx, x - 1, y - 1, CELL_SIZE + 2, CELL_SIZE + 2, 4)
      // Eyes
      ctx.fillStyle = '#0d1117'
      const [nc, nr] = idx + 1 < path.length ? path[idx + 1] : [c, r - 1]
      const dirC = nc - c
      const dirR = nr - r
      // Draw two small eyes depending on direction
      ctx.fillStyle = '#fff'
      if (dirC === 1 || (dirC === 0 && dirR === 0)) {
        // Moving right
        drawRoundRect(ctx, x + 8, y + 2, 2, 2, 1)
        drawRoundRect(ctx, x + 8, y + 7, 2, 2, 1)
      } else if (dirC === -1) {
        drawRoundRect(ctx, x + 1, y + 2, 2, 2, 1)
        drawRoundRect(ctx, x + 1, y + 7, 2, 2, 1)
      } else if (dirR === 1) {
        drawRoundRect(ctx, x + 2, y + 8, 2, 2, 1)
        drawRoundRect(ctx, x + 7, y + 8, 2, 2, 1)
      } else {
        drawRoundRect(ctx, x + 2, y + 1, 2, 2, 1)
        drawRoundRect(ctx, x + 7, y + 1, 2, 2, 1)
      }
    } else {
      // Body segment — fade toward tail
      const fadeFactor = 1 - (i / snakeCells.length) * 0.5
      ctx.fillStyle = SNAKE_BODY_COLOR
      ctx.globalAlpha = fadeFactor
      drawRoundRect(ctx, x, y, CELL_SIZE, CELL_SIZE, 2)
    }

    ctx.globalAlpha = 1
  })
}

function animate(ctx) {
  frameCounter++

  // Move snake every 2 frames (~30 moves/sec at 60fps)
  if (frameCounter % 2 === 0) {
    snakePos++
    snakeCells.unshift(snakePos)

    // Eat the cell
    if (snakePos >= 0 && snakePos < path.length) {
      const [c, r] = path[snakePos]
      if (grid[c] && grid[c][r] > 0) {
        grid[c][r] = 0
      }
    }

    if (snakeCells.length > snakeLength) {
      snakeCells.pop()
    }

    // When snake finishes the path, reset
    if (snakePos >= path.length + snakeLength) {
      generateGrid()
      snakePos = -snakeLength
      snakeCells = Array.from({ length: snakeLength }, (_, i) => -i)
    }
  }

  drawFrame(ctx)
  animId = requestAnimationFrame(() => animate(ctx))
}

function initCanvas() {
  const canvas = canvasRef.value
  const wrapper = wrapperRef.value
  if (!canvas || !wrapper) return

  const rawWidth = COLS * TOTAL - CELL_GAP
  const rawHeight = ROWS * TOTAL - CELL_GAP

  // Calculate scale to fit wrapper
  const wrapperWidth = wrapper.clientWidth
  scale = Math.min(1, wrapperWidth / rawWidth)

  canvas.width = rawWidth
  canvas.height = rawHeight
  canvas.style.width = Math.floor(rawWidth * scale) + 'px'
  canvas.style.height = Math.floor(rawHeight * scale) + 'px'
}

let resizeTimer = null
function onResize() {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(initCanvas, 150)
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')

  generateGrid()
  generatePath()
  snakeCells = Array.from({ length: snakeLength }, (_, i) => -i)
  snakePos = -snakeLength

  initCanvas()
  window.addEventListener('resize', onResize)
  animate(ctx)
})

onUnmounted(() => {
  if (animId) cancelAnimationFrame(animId)
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <div ref="wrapperRef" class="gh-contrib-wrapper">
    <div class="gh-contrib-header">
      <span class="gh-contrib-title">Contribution Activity</span>
      <div class="gh-contrib-legend">
        <span class="legend-label">Less</span>
        <span v-for="i in 5" :key="i" class="legend-cell" :style="{ background: ['#161b22','#0e4429','#006d32','#26a641','#39d353'][i-1] }"></span>
        <span class="legend-label">More</span>
      </div>
    </div>
    <canvas ref="canvasRef" class="gh-contrib-canvas"></canvas>
  </div>
</template>

<style scoped>
.gh-contrib-wrapper {
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 8px;
  padding: 1rem 1.25rem 1rem;
  width: 100%;
  box-sizing: border-box;
}

.gh-contrib-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.gh-contrib-title {
  font-size: 0.8rem;
  color: #8b949e;
  font-weight: 500;
}

.gh-contrib-legend {
  display: flex;
  align-items: center;
  gap: 3px;
}

.legend-label {
  font-size: 0.7rem;
  color: #8b949e;
}

.legend-cell {
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
}

.gh-contrib-canvas {
  display: block;
  image-rendering: pixelated;
}
</style>
