import { MapPin, Phone } from "lucide-react";
import { SocialIcons } from "./social-icons";

export const MediaAddress = () => {
  return (
    <div className="hidden h-12 items-center justify-between border-b border-white/50 lg:flex">
      <div className="flex items-center text-sm text-white">
        <div className="flex items-center">
          <MapPin className="h-4 w-4" />

          <span className="ml-2">
            3 Abbey Rd, London, United Kingdom
          </span>
        </div>

        <div className="ml-8 flex items-center">
          <Phone className="h-4 w-4" />

          <span className="ml-2">
            (+27) 81 343 4552
          </span>
        </div>
      </div>

      <SocialIcons />
    </div>
  )
}