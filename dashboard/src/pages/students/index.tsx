import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react"
import { ToastContainer } from "react-toastify";
import { Header } from "../../components/Header";
import Pagination from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { withSSRAuth } from "../../utils/withSSRAuth";

type Student = {
  id: string
  name: string
  registration: string
}

export default function Students() {
  const [students, setStudents] = useState<Student[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 10;
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    async function loadData() {
      const responseStudents = await api.get("/students/paginated", {
        params: {
          pageSize,
          pageNumber: currentPage
        }
      });

      setStudents(responseStudents.data.actors);
      setTotalResults(responseStudents.data.studentCount);
    }

    loadData();
  }, [currentPage]);

  return (
    <>
      <Head>
        <title>Dashboard IFOscar | Listagem de estudantes</title>
      </Head>

      <div className="h-screen bg-gray-950 overflow-auto">
        <Header />

        <div className="flex w-full">
          <ToastContainer
            theme="colored"
            toastClassName="errorAlert"
            autoClose={2000}
            pauseOnHover={false}
          />
          <Sidebar />

          <div className="my-10 ml-10 flex flex-col">
            <h1 className="text-gray-150 text-4xl font-medium">Listagem de estudantes</h1>

            <table className="max-w-5xl w-full mt-9 pb-4 border-separate border-spacing-y-2 overflow-x-auto block whitespace-nowrap scrollbar scrollbar-thumb-gray-450 scrollbar-track-gray-850">
              <thead>
                <tr>
                  <th className="font-normal text-base text-gray-450 text-left px-5">Nome</th>
                </tr>
              </thead>

              <tbody>
                {
                  students.map(student => (
                    <tr className="relative" key={student.id}>
                      <td className="bg-gray-900 rounded-tl-md rounded-bl-md px-5 py-4 text-base font-normal text-gray-400">
                        {student.name}
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            <Pagination currentPage={currentPage + 1} pageSize={pageSize} totalResults={totalResults} changeCurrentPage={setCurrentPage} />
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (context) => {
  return {
    props: {}
  }
})