"use client"

import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { MdPhone, MdVideocam, MdAttachFile, MdArrowBack } from "react-icons/md";
import { FaMicrophoneAlt } from "react-icons/fa";

interface Message {
  id: number;
  text: string;
  sender: string;
  timestamp: string;
}

interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  messages: Message[];
  lastMessageTime: string;
  image: string;
  isGroup: boolean;
}

const chatData: Chat[] = [
  {
    id: 1,
    name: "NGO Contribution to education",
    lastMessage: "Hey man, can you please review the latest design when you can?",
    image: "/images/Groupchat.png",
    lastMessageTime: "Friday 2:20pm",
    isGroup: true,
    messages: [
      { id: 1, text: "Hey man, can you please review the latest design when you can?", sender: "John Doe", timestamp: "Friday 2:20pm" },
      { id: 2, text: "Sure, I'll take a look at it soon.", sender: "You", timestamp: "Friday 2:25pm" },
    ]
  },
  {
    id: 2,
    name: "Dr Abiola Jonathan",
    lastMessage: "Hey man, can you please review it.",
    image: "/images/chat1.png",
    lastMessageTime: "Friday 2:20pm",
    isGroup: false,
    messages: [
      { id: 1, text: "Hey man, can you please review it.", sender: "Dr Abiola Jonathan", timestamp: "Friday 2:20pm" },
      { id: 2, text: "Of course, I'll get right on it.", sender: "You", timestamp: "Friday 2:22pm" },
    ]
  },
  {
    id: 3,
    name: "Sarah Johnson",
    lastMessage: "The report is ready for your review.",
    image: "/images/chat2.png",
    lastMessageTime: "Thursday 4:15pm",
    isGroup: false,
    messages: [
      { id: 1, text: "The report is ready for your review.", sender: "Sarah Johnson", timestamp: "Thursday 4:15pm" },
      { id: 2, text: "Thanks, I'll check it out.", sender: "You", timestamp: "Thursday 4:30pm" },
    ]
  },
  {
    id: 4,
    name: "Education Outreach Team",
    lastMessage: "Next meeting scheduled for Monday at 10 AM.",
    image: "/images/Groupchat.png",
    lastMessageTime: "Wednesday 3:00pm",
    isGroup: true,
    messages: [
      { id: 1, text: "Next meeting scheduled for Monday at 10 AM.", sender: "Emma Wilson", timestamp: "Wednesday 3:00pm" },
      { id: 2, text: "I'll be there.", sender: "You", timestamp: "Wednesday 3:05pm" },
    ]
  },
  {
    id: 5,
    name: "Michael Brown",
    lastMessage: "Can we discuss the budget proposal?",
    image: "/images/chat4.png",
    lastMessageTime: "Tuesday 11:30am",
    isGroup: false,
    messages: [
      { id: 1, text: "Can we discuss the budget proposal?", sender: "Michael Brown", timestamp: "Tuesday 11:30am" },
      { id: 2, text: "Sure, let's set up a meeting.", sender: "You", timestamp: "Tuesday 11:45am" },
    ]
  },
];

const ChatInterface: React.FC = () => {
    const [selectedChat, setSelectedChat] = useState<Chat>(chatData[0]);
    const [inputText, setInputText] = useState<string>('');
    const [searchText, setSearchText] = useState<string>('');
    const [filteredChats, setFilteredChats] = useState<Chat[]>(chatData);
    const [showChatList, setShowChatList] = useState(true);
    const [isRecording, setIsRecording] = useState(false);

    useEffect(() => {
      const filtered = chatData.filter(chat => 
        chat.name.toLowerCase().includes(searchText.toLowerCase()) ||
        chat.lastMessage.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredChats(filtered);
    }, [searchText]);

    const handleChatSelect = (chat: Chat) => {
      setSelectedChat(chat);
      setShowChatList(false);
    };

    const handleSendMessage = (e: React.FormEvent) => {
      e.preventDefault();
      if (inputText.trim()) {
        const newMessage: Message = {
          id: selectedChat.messages.length + 1,
          text: inputText,
          sender: 'You',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setSelectedChat(prevChat => ({
          ...prevChat,
          messages: [...prevChat.messages, newMessage],
          lastMessage: inputText,
          lastMessageTime: newMessage.timestamp
        }));
        setInputText('');
      }
    };

    const toggleChatList = () => {
      setShowChatList(!showChatList);
    };

    const handlePhoneCall = () => {
      alert(`Initiating phone call with ${selectedChat.name}`);
      // Implement actual phone call functionality here
    };

    const handleVideoCall = () => {
      alert(`Initiating video call with ${selectedChat.name}`);
      // Implement actual video call functionality here
    };

    const handleAttachFile = () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.onchange = (e) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (file) {
          alert(`File attached: ${file.name}`);
          // Implement file sending functionality here
        }
      };
      input.click();
    };

    const handleVoiceRecording = () => {
      setIsRecording(!isRecording);
      if (!isRecording) {
        alert('Voice recording started');
        // Implement voice recording start functionality here
      } else {
        alert('Voice recording stopped');
        // Implement voice recording stop and send functionality here
      }
    };

    return (
      <div className="flex flex-col md:flex-row h-screen bg-[#FFF5E0] pt-20">
        {/* Left sidebar - toggleable on small screens */}
        <div className={`w-full md:w-1/3 bg-[#FFF5E0] border-r border-gray-200 overflow-y-auto ${showChatList ? 'block' : 'hidden md:block'}`}>
          <div className="p-4 sticky top-0 bg-[#FFF5E0] z-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full py-2 px-4 bg-transparent rounded-full border border-gray-300"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>
          <div className="overflow-y-auto">
            {filteredChats.map((chat) => (
              <div 
                key={chat.id} 
                className={`flex items-center p-4 hover:bg-gray-100 cursor-pointer border-b border-gray-200 ${selectedChat.id === chat.id ? 'bg-gray-100' : ''}`}
                onClick={() => handleChatSelect(chat)}
              >
                <img
                  src={chat.image}
                  alt={chat.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold truncate">{chat.name}</p>
                  <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap">{chat.lastMessageTime}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right chat area */}
        <div className={`flex-1 flex flex-col bg-white ${!showChatList ? 'block' : 'hidden md:block'}`}>
          {/* Chat header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
            <div className="flex items-center">
              <MdArrowBack
                className="mr-2 text-gray-600 cursor-pointer md:hidden"
                size={24}
                onClick={toggleChatList}
              />
              <img
                src={selectedChat.image}
                alt={selectedChat.name}
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <h2 className="font-semibold">{selectedChat.name}</h2>
                <p className="text-sm text-gray-500">Yeelen Education Project</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <MdPhone className="text-gray-600 cursor-pointer" size={24} onClick={handlePhoneCall} />
              <MdVideocam className="text-gray-600 cursor-pointer" size={24} onClick={handleVideoCall} />
            </div>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-8 bg-gray-50">
            {selectedChat.messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex ${message.sender === 'You' ? 'flex-row-reverse' : 'flex-row'} items-end`}>
                  <img
                    src={message.sender === 'You' ? "/images/your-profile.jpg" : selectedChat.image}
                    alt={message.sender}
                    className="w-8 h-8 rounded-full mx-2"
                  />
                  <div className={`p-3 rounded-lg shadow max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg ${message.sender === 'You' ? 'bg-[#F1F1F1]' : 'bg-[#E1E1E1]'}`}>
                    {selectedChat.isGroup && message.sender !== 'You' && (
                      <p className="text-xs font-semibold text-gray-600">{message.sender}</p>
                    )}
                    <p>{message.text}</p>
                    <p className="text-xs text-gray-400 mt-1">{message.timestamp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message input */}
          <div className="p-4 flex items-center">
            <div className="flex-1 bg-white rounded-full border border-gray-300 mr-2">
              <div className="flex items-center">
                <MdAttachFile className="ml-3 text-gray-400 cursor-pointer" size={20} onClick={handleAttachFile} />
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Enter text here"
                  className="flex-1 py-2 px-4 bg-transparent outline-none"
                />
                <FaMicrophoneAlt 
                  className={`mr-3 cursor-pointer ${isRecording ? 'text-red-500' : 'text-gray-400'}`} 
                  size={20} 
                  onClick={handleVoiceRecording}
                />
              </div>
            </div>
            <button 
              onClick={handleSendMessage}
              className="px-6 py-2 rounded-full text-white"
              style={{background: 'linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)'}}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    );
};
 
export default ChatInterface;