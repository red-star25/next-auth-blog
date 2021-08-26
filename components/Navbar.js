import Link from "next/link";

function Navbar() {
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
      <Link href="#">
        <button>SignIn</button>
      </Link>
      <Link href="#">
        <button>SignOut</button>
      </Link>
    </nav>
  );
}

export default Navbar;
