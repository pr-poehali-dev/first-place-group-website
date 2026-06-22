import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				display: ['Oswald', 'sans-serif'],
				sans: ['Golos Text', 'sans-serif'],
			},
			colors: {
				electric: 'hsl(var(--electric))',
				violet: 'hsl(var(--violet-glow))',
				magenta: 'hsl(var(--magenta-glow))',
				orange: 'hsl(var(--orange))',
				'orange-soft': 'hsl(var(--orange-soft))',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(30px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					from: { opacity: '0', transform: 'scale(0.92)' },
					to: { opacity: '1', transform: 'scale(1)' }
				},
				'gradient-move': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-18px)' }
				},
				'glow-pulse': {
					'0%, 100%': { opacity: '0.6' },
					'50%': { opacity: '1' }
				},
				'marquee': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-50%)' }
				},
				'hero-reveal': {
					'0%': {
						clipPath: 'polygon(0% 100%, 8% 100%, 16% 100%, 25% 100%, 33% 100%, 41% 100%, 50% 100%, 58% 100%, 66% 100%, 75% 100%, 83% 100%, 91% 100%, 100% 100%, 100% 100%, 0% 100%)'
					},
					'20%': {
						clipPath: 'polygon(0% 100%, 8% 88%, 16% 92%, 25% 78%, 33% 85%, 41% 70%, 50% 80%, 58% 65%, 66% 75%, 75% 60%, 83% 70%, 91% 55%, 100% 65%, 100% 100%, 0% 100%)'
					},
					'40%': {
						clipPath: 'polygon(0% 100%, 8% 75%, 16% 82%, 25% 60%, 33% 70%, 41% 48%, 50% 62%, 58% 40%, 66% 55%, 75% 32%, 83% 48%, 91% 25%, 100% 40%, 100% 100%, 0% 100%)'
					},
					'60%': {
						clipPath: 'polygon(0% 100%, 8% 65%, 16% 72%, 25% 45%, 33% 58%, 41% 30%, 50% 45%, 58% 18%, 66% 35%, 75% 10%, 83% 28%, 91% 5%, 100% 20%, 100% 100%, 0% 100%)'
					},
					'75%': {
						clipPath: 'polygon(0% 100%, 8% 60%, 16% 68%, 25% 38%, 33% 52%, 41% 22%, 50% 38%, 58% 8%, 66% 25%, 75% 2%, 83% 18%, 91% 0%, 100% 10%, 100% 100%, 0% 100%)'
					},
					'88%': {
						clipPath: 'polygon(0% 100%, 8% 60%, 16% 68%, 25% 38%, 33% 52%, 41% 22%, 50% 38%, 58% 8%, 66% 25%, 75% 2%, 83% 18%, 91% 0%, 100% 10%, 100% 100%, 0% 100%)'
					},
					'100%': {
						clipPath: 'polygon(0% 100%, 8% 100%, 16% 100%, 25% 100%, 33% 100%, 41% 100%, 50% 100%, 58% 100%, 66% 100%, 75% 100%, 83% 100%, 91% 100%, 100% 100%, 100% 100%, 0% 100%)'
					},
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out forwards',
				'scale-in': 'scale-in 0.5s ease-out forwards',
				'gradient-move': 'gradient-move 6s ease infinite',
				'float': 'float 6s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
				'marquee': 'marquee 30s linear infinite',
				'hero-reveal': 'hero-reveal 6s cubic-bezier(0.4, 0, 0.2, 1) infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;