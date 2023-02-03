import React, {FC} from 'react'
import styles from './Button.module.scss'
import cn from 'classnames'
import {ButtonProps} from '@/components/Button/Button.props'
import ArrowIcon from './arrow.svg'

const Button: FC<ButtonProps> = (props): JSX.Element => {
	const {appearance, arrow = 'none', children, className, ...rest} = props

	return (
		<button className={cn(styles.button, className, {
			[styles.primary]: appearance === 'primary',
			[styles.ghost]: appearance === 'ghost'
		})} {...rest}>
			{children}
			{arrow !== 'none' && <span className={cn(styles.arrow, {
				[styles.right]: arrow === 'right',
				[styles.down]: arrow === 'down'
			})}> <ArrowIcon/> </span>}
		</button>
	)
}

export default Button
