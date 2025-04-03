import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  size: number
  speed: number
  alpha: number
  decay: number
  reset: (canvas: HTMLCanvasElement) => void
  update: (canvas: HTMLCanvasElement) => void
  draw: (ctx: CanvasRenderingContext2D) => void
}

const useStars = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Star parameters
    const stars: Star[] = []
    const starCount = 80
    const speed = 1.5

    // Star class
    class StarImpl implements Star {
      x = 0
      y = 0
      size = 0
      speed = 0
      alpha = 0
      decay = 0

      constructor() {
        this.reset(canvas!)
      }

      reset(canvas: HTMLCanvasElement) {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5
        this.speed = speed + Math.random() * 2
        this.alpha = Math.random()
        this.decay = 0.001 + Math.random() * 0.01
      }

      update(canvas: HTMLCanvasElement) {
        this.y -= this.speed
        this.alpha -= this.decay

        if (this.alpha <= 0 || this.y <= 0) {
          this.reset(canvas)
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize stars
    for (let i = 0; i < starCount; i++) {
      stars.push(new StarImpl())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        star.update(canvas)
        star.draw(ctx)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return canvasRef
}

const ShootingStars = () => {
  const canvasRef = useStars()

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        color: 'red',
        left: 0,
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    />
  )
}

export default ShootingStars
