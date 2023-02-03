import {ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react'

export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
	children: ReactNode
	size?: 'sm' | 'base' | 'xl'
}