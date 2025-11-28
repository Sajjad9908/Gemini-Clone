import React, { useState } from 'react';
import { assets } from '../../assets/assets/assets';
import { useContext } from 'react';
import { Context } from '../../context/Context';

const Sidebar = () => {
  const { onSent, prevPrompts, setRecentPrompt, Newchat } = useContext(Context);
  const [extended, setExtended] = useState(false);        // For desktop sidebar expand/collapse
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // For mobile sidebar visibility

  const toggleSidebar = () => setExtended(!extended);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
    setMobileMenuOpen(false); // Close mobile menu after selecting
  };

  return (
    <>
      {/* Hamburger Icon - Always visible on mobile */}
      <div className="sm:hidden fixed top-4 left-4 z-50">
        <img
          onClick={toggleMobileMenu}
          className={`w-6 h-6 cursor-pointer ${mobileMenuOpen?'hidden' : undefined} `}
          src={assets.menu_icon}
          alt="menu"
        />
      </div>

      {/* Desktop Sidebar - Hidden on mobile */}
      <div className={`hidden sm:flex flex-col justify-between bg-[#f0f4f9] px-2 py-4 min-h-screen transition-all duration-300 ${extended ? 'w-[200px]' : 'w-20'}`}>
        <div className="top">
          <div className="ml-4">
          <img
            onClick={toggleSidebar} className={`${mobileMenuOpen? 'none' :'block'} w-5 cursor-pointer mb-12`}
           
            src={assets.menu_icon}
            alt="toggle"
          />
          </div>

          <div
            onClick={() => { Newchat(); setExtended(true); }}
            className="newchat flex items-center gap-3 px-4 py-3 bg-[#e6eaf1] rounded-full text-gray-600 cursor-pointer hover:bg-gray-200 transition"
          >
            <img className="w-5" src={assets.plus_icon} alt="new" />
            {extended && <p>New Chat</p>}
          </div>

          {extended && (
            <div className="recent mt-8 animate-fade-in">
              <p className="text-sm text-gray-500 mb-3">Recent</p>
              {prevPrompts.map((item, index) => (
                <div
                  key={index}
                  onClick={() => loadPrompt(item)}
                  className="flex items-center gap-3 p-3 rounded-full hover:bg-[#e2e6eb] cursor-pointer transition"
                >
                  <img className="w-5" src={assets.message_icon} alt="msg" />
                  <p className="text-sm truncate">{item.slice(0, 20)}...</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bottom space-y-4">
          {['Help', 'Activity', 'Settings'].map((text, i) => {
            const icons = [assets.question_icon, assets.history_icon, assets.setting_icon];
            return (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-full hover:bg-[#e2e6eb] cursor-pointer transition"
              >
                <img className="w-11 sm:w-5 " src={icons[i]} alt={text} />
                {extended && <p className="text-sm">{text}</p>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Sidebar - Slides in from left */}
      <div
        className={`fixed inset-0 z-40 transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} sm:hidden`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={toggleMobileMenu}
        />

        {/* Sidebar Panel */}
        <div className="absolute left-0 top-0 w-72 h-full bg-[#f0f4f9] shadow-2xl flex flex-col justify-between py-8 px-6">
          <div>
            {/* Close button inside mobile sidebar */}
            <div className="flex justify-end mb-8">
              {extended ? 
             <img
                onClick={toggleMobileMenu}
                className="w-6 cursor-pointer"
                src={assets.menu_icon}
                alt="close"
              />
              :
              <p onClick={toggleMobileMenu} className="text-red-500 text-[22px] cursor-pointer">X</p> 
            }
             
            </div>

            <div
              onClick={() => { Newchat(); toggleMobileMenu(); }}
              className="flex items-center gap-3 px-4 py-3 bg-[#e6eaf1] rounded-full cursor-pointer mb-8"
            >
              <img className="w-5" src={assets.plus_icon} alt="new" />
              <p>New Chat</p>
            </div>

            <div className="recent space-y-3">
              <p className="text-sm text-gray-500 mb-3">Recent</p>
              {prevPrompts.map((item, index) => (
                <div
                  key={index}
                  onClick={() => loadPrompt(item)}
                  className="flex items-center gap-3 p-3 rounded-full hover:bg-[#e2e6eb] cursor-pointer"
                >
                  <img className="w-5" src={assets.message_icon} alt="msg" />
                  <p className="text-sm truncate">{item.slice(0, 25)}...</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bottom space-y-4">
            {['Help', 'Activity', 'Settings'].map((text, i) => {
              const icons = [assets.question_icon, assets.history_icon, assets.setting_icon];
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-full hover:bg-[#e2e6eb] cursor-pointer"
                >
                  <img className="w-5" src={icons[i]} alt={text} />
                  <p className="text-sm">{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;