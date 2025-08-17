import React, { useState, useRef, useEffect } from 'react';

const useInView = (offset = 0) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = (ref.current as HTMLElement).getBoundingClientRect();
      if (rect.top <= window.innerHeight - offset) {
        setIsInView(true);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);
  return [ref, isInView] as const;
};

const members = [
  {
    name: 'Bob Smith',
    position: 'Position',
    image: '/dummy-image.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  // Repeat for 4 members
  {
    name: 'Bob Smith',
    position: 'Position',
    image: '/dummy-image.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: 'Bob Smith',
    position: 'Position',
    image: '/dummy-image.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: 'Bob Smith',
    position: 'Position',
    image: '/dummy-image.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const BoardMembers: React.FC = () => {
  const [expandedMembers, setExpandedMembers] = useState<Set<number>>(new Set());
  const [titleRef, titleInView] = useInView(100);

  const toggleMember = (index: number) => {
    const newExpanded = new Set(expandedMembers);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedMembers(newExpanded);
  };

  return (
    <section className="flex flex-col items-center mt-8">
      <h2 
        ref={titleRef as React.RefObject<HTMLHeadingElement>}
        className={`font-bold text-4xl text-white mb-8 transition-all duration-700 ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        Board Members
      </h2>
      {/* Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {members.map((member, idx) => {
          const [cardRef, cardInView] = useInView(100);
          return (
            <div
              key={idx}
              ref={cardRef as React.RefObject<HTMLDivElement>}
              className={`flex flex-col items-center rounded-xl p-6 text-white shadow-lg transition-all duration-700 ${cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ backgroundColor: '#12025A' }}
              tabIndex={0}
              aria-label={`Board member: ${member.name}`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 rounded-lg mb-4 object-cover"
              />
              <div className="font-bold text-2xl w-full text-center mt-2 mb-0">{member.name}</div>
              <div className="flex items-center w-full my-2">
                <div className="flex-grow border-t border-white/30"></div>
                <button
                  onClick={() => toggleMember(idx)}
                  className="flex items-center gap-2 px-4 focus:outline-none focus:ring-2 focus:ring-white transition-colors duration-200"
                  aria-expanded={expandedMembers.has(idx)}
                  aria-controls={`member-description-${idx}`}
                  tabIndex={0}
                  aria-label={`Toggle description for ${member.name}`}
                  style={{ minWidth: 0 }}
                >
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${expandedMembers.has(idx) ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="flex-grow border-t border-white/30"></div>
              </div>
              <div
                id={`member-description-${idx}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedMembers.has(idx) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="font-bold text-base text-white/70 mb-2">{member.position}</div>
                <p className="text-sm text-white/90 text-left leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BoardMembers; 