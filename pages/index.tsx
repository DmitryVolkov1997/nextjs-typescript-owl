import {Htag} from '@/components'
import Button from '@/components/Button/Button'

export default function Home() {
	return (
		<>
			<Htag tag={'h1'}>Hello</Htag>
			<Button appearance={'primary'} arrow={'right'}>Button1</Button>
			<Button appearance={'ghost'} arrow={'down'}>Button2</Button>
		</>
	)
}
