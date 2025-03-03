// src/app/dashboard/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import BlogCard from '@/components/BlogCard';
import { fetchBlogs } from '@/services/blogService';
import { fetchBlog } from '@/services/fetchblog';
import { BlogProps } from '@/types';
import SearchBar from '@/components/Searchbar'; 

const Dashboard: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [blogs, setBlogs] = useState<BlogProps[]>([]);
  const [error, setError] = useState('');

  const handleSearch = async (query: string) => {
    try {
      const fetchedBlogs = await fetchBlog(query);
      setBlogs(fetchedBlogs.blogs);
      console.log("Hello")
      console.log(blogs)
    } catch (err) {
      console.error('Error searching blogs:', err);
      setError('Failed to search blogs');
    }
  };

  useEffect(() => {
    console.log('Session status:', status); // Debug log
    if (status === 'unauthenticated') {
      router.push('/signin');
    } else if (status === 'authenticated') {
      fetchBlogs().then((fetchedBlogs) => {
        //console.log('Fetched blogs:', fetchedBlogs); // Debug log
        setBlogs(fetchedBlogs);
     
      }).catch((err) => {
        console.error('Error fetching blogs:', err); // Debug log
        setError('Failed to fetch blogs');
      });
    }
  }, [status, router]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-content">
        <h1 className="centered-heading">Dashboard</h1>
        <div className="search-bar-container">
          <SearchBar onSearch={handleSearch} />
          
        </div>
        {error && <p className="error">{error}</p>}
        {blogs.length > 0 ? (
          <div className="blog-list">
            {blogs.map((blog) => (
              <BlogCard key={blog._id} {...blog} />
            ))}
          </div>
        ) : (
          <p>No blogs available</p>
        )}
      </div>
   
      <style jsx>{`
        .dashboard-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background-color: #f0f0f0;
        }
        .dashboard-content {
          flex: 1;
          padding: 2rem;
        }
        .centered-heading {
          text-align: center;
          margin-bottom: 2rem;
          color: #333;
        }
        .search-bar-container {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }
        .error {
          color: red;
          text-align: center;
          margin-bottom: 1rem;
        }
        .blog-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          padding: 1rem;
        }
        .footer {
          text-align: center;
          padding: 1rem;
          background-color: #add8e6;
        }
        @media (max-width: 600px) {
          .blog-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;


