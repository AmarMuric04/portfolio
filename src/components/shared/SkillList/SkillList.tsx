const SkillList: React.FC<{ skills: readonly string[] }> = ({ skills }) => {
	return (
		<ul className="flex flex-wrap gap-2">
			{skills.map((skill) => (
				<li
					className="rounded-lg bg-accent px-2 py-1 text-label text-on-accent"
					key={skill}
				>
					{skill}
				</li>
			))}
		</ul>
	);
};

export { SkillList };
