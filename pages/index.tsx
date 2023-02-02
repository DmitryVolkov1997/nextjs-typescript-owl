import {Htag} from '@/components'
import Button from '@/components/Button/Button'

export default function Home() {
	return (
		<>
			<Htag tag={'h1'}>Hello</Htag>
			<Button appearance={'primary'}>Button1</Button>
			<Button appearance={'ghost'}>Button2</Button>
		</>
	)
}
