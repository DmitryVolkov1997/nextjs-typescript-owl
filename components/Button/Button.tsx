import React, {FC} from 'react'
import styles from './Button.module.scss'
import cn from 'classnames'
import {ButtonProps} from '@/components/Button/Button.props'

const Button: FC<ButtonProps> = (props): JSX.Element => {
	const {appearance, children, className, ...rest} = props

	return (
		<button className={cn(styles.button, className, {
			[styles.primary]: appearance === 'primary',
			[styles.ghost]: appearance === 'ghost'
		})} {...rest}>
			{children}
		</button>
	)
}

export default Button
