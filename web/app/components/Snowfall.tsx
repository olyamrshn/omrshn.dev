import { useState, useEffect } from "react"

interface Snowflake {
  id: number
  left: number
  delay: number
  size: number
  opacity: number
  animationDuration: number
}

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  const createSnowflake = () => {
    const size = Math.random() * 4 + 2
    return {
      id: Math.random(),
      left: Math.random() * 100,
      delay: Math.random() * 5,
      size,
      opacity: Math.random() * 0.6 + 0.4,
      animationDuration: Math.random() * 3 + 5,
    }
  }

  useEffect(() => {
    const initialSnowflakes = Array.from({ length: 50 }, createSnowflake)
    setSnowflakes(initialSnowflakes)

    const interval = setInterval(() => {
      setSnowflakes((prev) => {
        const filtered = prev.filter(() => Math.random() > 0.1)
        return [...filtered, createSnowflake()]
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {snowflakes.map((snowflake) => (
        <div
          key={snowflake.id}
          className="absolute rounded-full bg-blue-300 dark:bg-white animate-fall"
          style={{
            left: `${snowflake.left}%`,
            width: `${snowflake.size}px`,
            height: `${snowflake.size}px`,
            opacity: snowflake.opacity,
            animation: `fall ${snowflake.animationDuration}s linear infinite`,
            animationDelay: `${snowflake.delay}s`,
            top: `-${snowflake.size}px`,
          }}
        />
      ))}
    </div>
  )
}

export default Snowfall
