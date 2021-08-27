import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";

function Navbar() {
  const [session, loading] = useSession();

  const handleSignIn = (e) => {
    e.preventDefault();
    signIn();
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    signOut();
  };

  return (
    <nav>
      <Link href="/">
        <button>Home</button>
      </Link>
      <Link href="/dashboard">
        <button>Dashboard</button>
      </Link>
      <Link href="/blog">
        <button>Blog</button>
      </Link>
      {!loading && !session && (
        <Link href="/api/auth/signin">
          <button onClick={handleSignIn}>SignIn</button>
        </Link>
      )}
      {session && (
        <Link href="/api/auth/signout">
          <button onClick={handleSignOut}>SignOut</button>
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
