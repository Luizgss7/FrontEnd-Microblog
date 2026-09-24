import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Timeline() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postList, setPostList] = useState([]);
  const navigate = useNavigate()

 useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://127.0.0.1:5001/api/timeline/Login1');
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setPostList(result);
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
        };

        fetchData();
      }, []); // Empty dependency array means it runs once on mount

      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error.message}</div>;


  return(
    <table>
      <tbody>
      {postList.map(post => 
        <tr key={post.id}>
          <td>
            {post.login} <br />
            {post.text} <br />
            {post.create_date} <br /> <br />
          </td>
        </tr>
        )}
      </tbody>
    </table>
  );
}
export default Timeline;