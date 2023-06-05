import styles from './styles.module.css'

interface IVideo {
	src: string
	type: string
}

export default function Video({ src, type }: IVideo) {
	return <video autoPlay loop muted className={styles.video}>
		<source
			src={src}
			type={type}
		/>
	</video>
}