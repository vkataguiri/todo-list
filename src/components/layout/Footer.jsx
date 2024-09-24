import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-slate-950 text-white h-40 w-full flex justify-center items-center text-md flex-col absolute bottom-0">
			<p>
				<span className="font-bold">Vinícius K. Perrot e Silva</span> &copy; {currentYear}
			</p>
			<ul className="flex flex-row">
				<li className="mx-2 hover:text-violet-400 duration-150">
					<a href="https://github.com/vkataguiri/" target="blank">
						<FaGithub className="text-2xl" />
					</a>
				</li>
				<li className="mx-2 hover:text-violet-400 duration-150">
					<a href="https://github.com/vkataguiri/" target="blank">
						<FaLinkedin className="text-2xl" />
					</a>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
