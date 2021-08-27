import { getSession, signIn } from "next-auth/client";
import { useEffect, useState } from "react";
import styles from "../styles/Dashboard.module.css";

function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkIsSignedIn = async () => {
      await getSession().then((session) => {
        // Not Signed In
        if (!session) {
          signIn();
        } else {
          // Signed In
          setLoading(false);
        }
      });
    };
    checkIsSignedIn();
  }, []);

  if (loading) {
    return (
      <div className={styles.dashboard}>
        <h2>Loading</h2>
      </div>
    );
  }

  return (
    <div className={styles.dashboard}>
      <h1>Dashboard page</h1>
    </div>
  );
}

export default Dashboard;
