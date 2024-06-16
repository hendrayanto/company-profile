import { useState, useEffect } from 'react';
import Header from './Header';
import { useMediaQuery } from 'react-responsive';

function Team() {
  const [isTeamLoading, setIsTeamLoading] = useState(true);
  const [teamMembers, setTeamMembers] = useState([]);
  const [newUser, setNewUser] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1080px)' });

  const descriptions = [
    'An expert in developing and implementing advanced AI algorithms and machine learning models. She focuses on creating intelligent systems that can learn and adapt, enhancing the capabilities of Verizon Innovations.',
    'A seasoned software engineer with a passion for developing innovative solutions. He has a proven track record of delivering high-quality software products that meet customer needs and exceed expectations.',
    'A talented designer with a keen eye for detail and a passion for creating beautiful and intuitive user experiences. She specializes in user interface design and has a knack for turning complex concepts into simple and elegant designs.',
    'A skilled project manager with a talent for leading cross-functional teams and delivering projects on time and within budget. He has a proven track record of successfully managing complex projects and ensuring that all stakeholders are aligned and engaged.',
    'A creative marketing specialist with a passion for storytelling and a talent for creating compelling content. She specializes in digital marketing and has a knack for developing campaigns that drive engagement and generate leads.',
    'A seasoned sales professional with a proven track record of driving revenue growth and building strong customer relationships. He has a talent for identifying new business opportunities and closing deals that deliver value to customers and the company.',
  ];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsTeamLoading(true);

      try {
        const response = await fetch('https://randomuser.me/api/?results=6');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const shuffledDescriptions = shuffleArray([...descriptions]);
        const formattedData = data.results.map((result, index) => ({
          ...result,
          description: shuffledDescriptions[index],
        }));
        setTeamMembers(formattedData);
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setIsTeamLoading(false);
      }
    };
    fetchData();
  }, [newUser]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="max-w-6xl w-full p-4 flex flex-col items-center">
          <div className="bg-gray-500 bg-opacity-20 rounded-2xl p-4 w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">TEAM</h2>
            {isTeamLoading ? (
              <p className="text-center">Loading...</p>
            ) : (
              <div
                className={`grid ${isDesktopOrLaptop ? 'grid-cols-2' : 'grid-cols-1'} gap-4 justify-center overflow-y-auto`}
                style={{
                  maxHeight: 'calc(100vh - 300px)',
                  width: '100%', 
                }}
              >
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex mb-6">
                    <div className="flex-shrink-0">
                      <img
                        src={member.picture.large}
                        alt={`${member.name.first} ${member.name.last}`}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full"
                      />
                    </div>
                    <div className="ml-4">
                      <h1 className="text-lg md:text-xl font-bold">
                        {member.name.first} {member.name.last}
                      </h1>
                      <p className="text-sm md:text-base">{member.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="flex justify-center mt-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                onClick={() => setNewUser(!newUser)}
              >
                Next Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
