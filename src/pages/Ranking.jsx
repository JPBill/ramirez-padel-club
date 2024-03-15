import { useState } from 'react';
import { playersRanking } from '../constants/data';
import HeroComponent from '../components/HeroComponent';
import styles from '../style';

const Ranking = () => {
  const [activeTab, setActiveTab] = useState('6° Caballeros');

  return (
    <div className="overflow-hidden">
      <HeroComponent title="Circuito Anual" subtitle="Ranking" />
      <div className="text-center text-sm font-medium text-primary-text">
        <ul className="-mb-px flex flex-wrap items-center justify-center">
          {Object.keys(playersRanking).map((tab) => (
            <li className="mr-2" key={tab}>
              <a
                href="#"
                className={`inline-block rounded-t-lg border-b-2 p-3 ${
                  activeTab === tab
                    ? 'border-primary-green text-primary-green'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-4 pb-6 sm:px-6 lg:px-8">
        <div className="mt-8 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr className="text-center">
                      <th
                        scope="col"
                        className="relative py-3 pl-4 pr-3 sm:pl-6"
                      >
                        <span className="sr-only">Posición</span>
                      </th>
                      <th scope="col" className={styles.tableTitle}>
                        <span className="sr-only">Jugador/a</span>
                      </th>
                      <th scope="col" className={styles.tableTitle}>
                        Total
                      </th>
                      <th scope="col" className={styles.tableTitle}>
                        1° fecha
                      </th>
                      <th scope="col" className={styles.tableTitle}>
                        2° fecha
                      </th>
                      <th scope="col" className={styles.tableTitle}>
                        3° fecha
                      </th>
                      <th scope="col" className={styles.tableTitle}>
                        4° fecha
                      </th>
                      <th
                        scope="col"
                        className={`${styles.tableTitle} relative pl-3 pr-4`}
                      >
                        5° fecha
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 bg-white">
                    {playersRanking[activeTab].map((player, index) => (
                      <tr key={index} className="text-center">
                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {index + 1}
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-left text-sm text-gray-500">
                          {player.name}
                          {player.category && (
                            <span className="ml-2 rounded-full border border-gray-400 bg-gray-100 px-2 py-0.5 text-xs font-medium text-green-800">
                              {player.category}
                            </span>
                          )}
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">
                          {player.total}
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">
                          {player.score[0]}
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">
                          {player.score[1]}
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">
                          {player.score[2]}
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">
                          {player.score[3]}
                        </td>
                        <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-sm font-medium text-gray-500">
                          {player.score[4]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
