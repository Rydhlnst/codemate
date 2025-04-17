"use client"

import { useParams } from 'next/navigation';
import React from 'react';

const GroupChatPage = () => {
  const router = useParams();
  const id = router.id as string | undefined;

  if (!id) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Chat Group: {id}</h1>
      {/* Add chat group UI components here */}
    </div>
  );
};

export default GroupChatPage;