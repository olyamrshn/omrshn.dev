import { Link } from "@tanstack/react-router"

interface BackLinkProps {
  to: string
  label: string
}

const BackLink: React.FC<BackLinkProps> = ({ to, label }) => {
  return (
    <div className="absolute top-8 bottom-8 left-8">
      <Link to={to} className="text-sm opacity-60 hover:opacity-100">
        ← {label}
      </Link>
    </div>
  )
}

export default BackLink
