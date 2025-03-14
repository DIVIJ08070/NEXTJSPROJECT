import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                Hi! I'm <span className="font-semibold">Divij</span>, a Computer Science student at <span className="font-semibold">SET College</span>. I specialize in frontend development and have some experience in backend as well. Passionate about coding, I love building user-friendly web applications and exploring new technologies in the development space.
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg">
                Whether it's crafting smooth UI/UX experiences or handling APIs, I enjoy solving problems through code. I constantly strive to learn and improve, pushing my boundaries in both frontend and backend development.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">My Journey in Tech</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
              From curious beginner to passionate developer—here’s how I grew in the world of programming.
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
              <Image
  src="/jet.jpg"
  alt="Jett from Valorant"
  width={400}
  height={250}
  className="w-[400px] h-[250px] object-cover rounded-lg shadow-lg"
/>
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Getting Started</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  My journey in programming began with a fascination for how websites worked. I started learning HTML, CSS, and JavaScript, experimenting with simple web pages and interactive elements.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <Image src="/brim.jpg" alt="Brimstone from Valorant" width={500} height={300} className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Diving Deeper</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  As I progressed, I started working with React.js, building scalable and efficient UI components. I also explored backend technologies like Node.js and Express.js, developing small APIs and integrating databases.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <Image src="/raze.jpg" alt="Raze from Valorant" width={500} height={300} className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Building Real-World Projects</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  I started participating in hackathons, collaborating on projects, and developing applications that solve real-world problems. These experiences helped me refine my skills and work in team environments.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <Image src="/omen.png" alt="Omen from Valorant" width={500} height={300} className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">The Journey Continues</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  I’m always eager to learn new technologies and improve my coding skills. Currently, I’m diving into Web3 and blockchain development, exploring how decentralized applications (dApps) can reshape the internet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold">Gaming & Esports</h2>
          <p className="mt-4 text-lg">
            Apart from coding, I’m also a passionate gamer. I love competitive gaming and have achieved 
            <span className="text-yellow-400 font-semibold"> Diamond rank in Valorant</span>. 🎮🔥
          </p>
        </div>
      </section>
    </div>
  );
}