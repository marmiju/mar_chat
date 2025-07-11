import React from 'react';

// import { GetGroups } from '../../../lib/groups/GroupHAndler';

const Sidebar = ({ onGroupClick }: { onGroupClick: () => void }) => {
  return (
    <div className="p-4 space-y-2">
      <h2 className="text-xl font-bold mb-4">Groups</h2>
      <button
        onClick={onGroupClick}
        className="block w-full text-left py-2 px-4 bg-gray-100 rounded hover:bg-gray-200"
      >
        Group 1
      </button>
      <button
        onClick={onGroupClick}
        className="block w-full text-left py-2 px-4 bg-gray-100 rounded hover:bg-gray-200"
      >
        Group 2
      </button>
    </div>
  );
};


export default Sidebar;