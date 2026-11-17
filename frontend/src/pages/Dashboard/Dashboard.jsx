/**
 * Dashboard: default home after login; question list, quick actions, URL-driven search.
 * Data: `questionService` (keyword `q`, semantic `semantic`, or full list).
 */

import { useAuth } from '../../contexts/AuthContext';
import { getQuestions } from "../../services/question.service";
import { usetate, useEffect } from "react";
export default function Dashboard() {
  const { user } = useAuth();
  const [questions,setQuestions] = usestate([]);
const [loading,setloading] = usestate(true); 
const [error,setError] = usestate(null);
const [seachQuery,setSearchQuery] = usestate("");
const[seachMode,setSearchMode] = useState("keyword");
  const firstName = user?.firstName?.trim();
  const welcomeLine = firstName
    ? `Good to see you, ${firstName}.`
    : 'Welcome to the forum.';

useEffect(() => {
  async function loadQuestions() {
    try {
      setLoading(true);
      setError(null);
      const data = await getQustions();
      setQuestions(data);
    } catch (err) {
      setError("Failed to load questions.");
    } finally {
      setLoading(false);
    }
  }

  loadQuestions();
}, []);



  return (
    <div>
      <h3>{welcomeLine}</h3> 
      <h2>Community Questions</h2>
      <p>Explore questions from the community. </p>
    <input
    type="text"
    placeholder="Search questions..."
/>
    <h2>Recent Questions</h2>
    <p>Browse the latest questions from the community.</p>
    </div>
  );
}
