'use client'

import Image from 'next/image'
import { Bot, Briefcase, ChevronLeft, ChevronRight, Code, Cog, Users, Zap } from 'lucide-react'

type CoffeeChat = Record<string, string>

const photoPath = (name: string) => {
  const photos: Record<string, string> = {
    'Zachary Feldman': '/team/zach-feldman.jpg',
    'Cam Mazzacane': '/team/cam-mezzacane.jpg',
  }
  return photos[name] ?? `/team/${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.jpg`
}

const coffeeChatSubteam = (name: string, subteam: string) => {
  const subteamOverrides: Record<string, string> = {
    'Zachary Feldman': 'Mechanical',
    'Daniel Sorokin': 'Telemetry',
    'Ruth Taddesse': 'Telemetry',
  }

  return subteamOverrides[name] ?? subteam
}

const CoffeeChatSubteamIcon = ({ name, subteam }: { name: string, subteam: string }) => {
  const assignedSubteam = coffeeChatSubteam(name, subteam)
  const icons = {
    Mechanical: Cog,
    Electrical: Zap,
    Telemetry: Code,
    Autonomy: Bot,
    Operations: Briefcase,
  }
  const Icon = icons[assignedSubteam as keyof typeof icons] ?? Users

  return (
    <span
      className="inline-flex shrink-0"
      title={`${assignedSubteam} subteam`}
      aria-label={`${assignedSubteam} subteam`}
    >
      <Icon className="h-10 w-10 text-red-400" aria-hidden="true" />
    </span>
  )
}

const displayRole = (chat: CoffeeChat) => {
  if (chat.Name === 'Jaiden Grimminck') return 'Autonomy, Simulation Subsystem Lead'
  if (chat.Subteam === 'Mechanical' && chat.Role.includes('Subsystem Lead')) return `Mechanical, ${chat.Role}`
  return chat.Role
}

export default function CoffeeChatsCarousel({ chats }: { chats: CoffeeChat[] }) {
  const scrollByCard = (direction: -1 | 1) => {
    const carousel = document.getElementById('coffee-chat-carousel')
    if (!carousel) return

    const card = carousel.querySelector<HTMLElement>('[data-coffee-chat-card]')
    const gap = 16
    const distance = card ? card.offsetWidth + gap : carousel.clientWidth * 0.85
    carousel.scrollBy({ left: direction * distance, behavior: 'smooth' })
  }

  return (
    <div>
      <div className="mb-4 flex justify-end gap-2 sm:hidden">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          className="flex h-10 w-10 items-center justify-center border border-red-900/70 bg-gray-950 text-white transition-colors hover:border-red-500 hover:bg-red-600"
          aria-label="Previous coffee chat"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          className="flex h-10 w-10 items-center justify-center border border-red-900/70 bg-gray-950 text-white transition-colors hover:border-red-500 hover:bg-red-600"
          aria-label="Next coffee chat"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      <div id="coffee-chat-carousel" className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:block sm:space-y-6 sm:overflow-visible sm:px-0 sm:pb-0">
        {chats.map((chat) => (
          <div key={`profile-${chat.Name}`} data-coffee-chat-card className="flex w-[min(82vw,22rem)] shrink-0 snap-center flex-col gap-4 sm:w-auto sm:flex-row sm:items-start sm:gap-6">
            <Image src={photoPath(chat.Name)} alt={chat.Name} width={144} height={144} className="h-44 w-full shrink-0 bg-gray-950 object-contain sm:h-36 sm:w-36" />
            <div className="result-card min-w-0 flex-1 p-4 sm:p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-3 sm:items-center sm:gap-4">
                  <CoffeeChatSubteamIcon name={chat.Name} subteam={chat.Subteam} />
                  <div>
                    <h3 className="text-lg font-bold text-white sm:text-xl">{chat.Name}</h3>
                    <p className="text-sm leading-relaxed text-red-400 sm:text-base">{displayRole(chat)}</p>
                  </div>
                </div>
                {chat['Google Calendar Link'] && (
                  <a href={chat['Google Calendar Link']} target="_blank" rel="noopener noreferrer" className="inline-flex w-full shrink-0 justify-center bg-red-600 px-5 py-2 font-semibold text-white hover:bg-red-500 sm:w-auto">
                    Book
                  </a>
                )}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-300 sm:text-base">{chat.Bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
