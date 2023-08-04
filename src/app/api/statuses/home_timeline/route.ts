import { NextResponse } from 'next/server'
const timeline = [
  {
    id: '0',
    avatar:
        'https://api.dicebear.com/6.x/adventurer/svg?seed=2',
    username: 'wongmjane',
    message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
    
    (gzipped size went from 16.6 KB down to 2.7 KB!!)
    
    * Chrome 79+, Safari 14+, Firefox 68+`
  },
  {
    id: '1',
    avatar:
    'https://api.dicebear.com/6.x/adventurer/svg?seed=4',
    username: 'midudev',
    message: 'Wow, devter está funcionando y vivo 🦉',
    name: 'Miguel Ángel Durán'
  },
  {
    id: '2',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar:
    'https://api.dicebear.com/6.x/adventurer/svg?seed=1',
    message: `Abro paraguas Paraguas
    
    Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`
  },
  {
    id: '0',
    avatar:
        'https://api.dicebear.com/6.x/adventurer/svg?seed=2345',
    username: 'wongmjane',
    message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
    
    (gzipped size went from 16.6 KB down to 2.7 KB!!)
    
    * Chrome 79+, Safari 14+, Firefox 68+`
  },
  {
    id: '1',
    avatar:
    'https://api.dicebear.com/6.x/adventurer/svg?seed=4234',
    username: 'midudev',
    message: 'Wow, devter está funcionando y vivo 🦉',
    name: 'Miguel Ángel Durán'
  },
  {
    id: '2',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar:
    'https://api.dicebear.com/6.x/adventurer/svg?seed=1234',
    message: `Abro paraguas Paraguas
    
    Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`
  },
  {
    id: '0',
    avatar:
        'https://api.dicebear.com/6.x/adventurer/svg?seed=27787',
    username: 'wongmjane',
    message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
    
    (gzipped size went from 16.6 KB down to 2.7 KB!!)
    
    * Chrome 79+, Safari 14+, Firefox 68+`
  },
  {
    id: '1',
    avatar:
    'https://api.dicebear.com/6.x/adventurer/svg?seed=42342',
    username: 'midudev',
    message: 'Wow, devter está funcionando y vivo 🦉',
    name: 'Miguel Ángel Durán'
  },
  {
    id: '2',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar:
    'https://api.dicebear.com/6.x/adventurer/svg?seed=1908',
    message: `Abro paraguas Paraguas
    
    Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`
  },
  {
    id: '0',
    avatar:
        'https://api.dicebear.com/6.x/adventurer/svg?seed=432',
    username: 'wongmjane',
    message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
    
    (gzipped size went from 16.6 KB down to 2.7 KB!!)
    
    * Chrome 79+, Safari 14+, Firefox 68+`
  },
  {
    id: '1',
    avatar:
    'https://api.dicebear.com/6.x/adventurer/svg?seed=42345',
    username: 'midudev',
    message: 'Wow, devter está funcionando y vivo 🦉',
    name: 'Miguel Ángel Durán'
  },
  {
    id: '2',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar:
    'https://api.dicebear.com/6.x/adventurer/svg?seed=1664',
    message: `Abro paraguas Paraguas
    
    Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`
  }
]

export async function GET (req: Request) {
  return NextResponse.json({ timeline }, { status: 200, headers: { 'Content-Type': 'application/json' } })
}
