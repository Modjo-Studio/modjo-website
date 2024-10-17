import BlockWrapper from '../BlockWrapper/BlockWrapper';
import styles from './styles.module.css';
import { ProjectsInfo } from './mocks';
import { ProjectCard } from './components/ProjectCard';
import { BLOCKS_ID } from '../../utils/constants';

const ProjectBlock = () => {
	return (
		<BlockWrapper blockId={BLOCKS_ID.PROJECTS} minHeight='55dvh'>
			<div className={styles.block}>
				<h2 className={styles.title}>проекты</h2>
				<div className={styles.projects}>
					{ProjectsInfo.map(({ image, title, date, info, url }, index) => (
						<ProjectCard
							key={index}
							info={info}
							date={date}
							image={image}
							title={title}
							url={url}
						/>
					))}
				</div>
			</div>
		</BlockWrapper>
	);
};

export default ProjectBlock;
