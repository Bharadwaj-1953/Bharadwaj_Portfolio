import React from 'react';
import experience from '../data/experience';
import AnimatedSection from './AnimatedSection';

const logoMap = {
  'Florida Department of Children & Families': '/dcf.png',
  'Florida State University': '/FSU 1.png',
  'Sri Bhramara Township PVT. LTD.': '/sri.png',
  'Unical Systems': '/Unical.jpg',
  'Oasis Infobyte': '/Oasis.jpg',
};

function groupByCompany(list) {
  const order = [];
  const map = {};
  list.forEach(exp => {
    if (!map[exp.companyName]) {
      map[exp.companyName] = [];
      order.push(exp.companyName);
    }
    map[exp.companyName].push(exp);
  });
  return order.map(name => ({ companyName: name, roles: map[name] }));
}

function getDateRange(roles) {
  const latest = roles[0].date.split('–')[1]?.trim() || 'Present';
  const earliest = roles[roles.length - 1].date.split('–')[0].trim();
  return `${earliest} – ${latest}`;
}

export default function Experience() {
  const groups = groupByCompany(experience);

  return (
    <section id="experience" className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">

        <AnimatedSection>
          <p className="text-indigo-400 font-mono text-xs tracking-[0.2em] uppercase mb-3">
            Experience
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-14">
            Professional Experience
          </h2>
        </AnimatedSection>

        <div className="relative">
          <div className="hidden md:block absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/60 via-zinc-700/50 to-transparent" />

          <div className="space-y-6">
            {groups.map((group, gi) => {
              const logo = logoMap[group.companyName];
              const isMulti = group.roles.length > 1;

              return (
                <AnimatedSection key={group.companyName} delay={gi * 0.07}>
                  <div className="relative md:pl-14">
                    <div className="hidden md:flex absolute left-0 top-7 w-8 h-8 items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 ring-4 ring-zinc-950" />
                    </div>

                    <div className="bg-zinc-900/50 border border-zinc-800/60 rounded-2xl hover:border-zinc-700/70 hover:bg-zinc-900/70 transition-all duration-300">

                      {isMulti ? (
                        <>
                          {/* Multi-role: company header + divider + inner timeline */}
                          <div className="flex items-center gap-4 px-6 pt-6 pb-4 border-b border-zinc-800/50">
                            {logo && (
                              <img
                                src={logo}
                                alt={group.companyName}
                                className="w-11 h-11 rounded-xl object-contain bg-white p-1 shrink-0"
                              />
                            )}
                            <div className="min-w-0">
                              <h3 className="font-display font-bold text-zinc-100 text-base leading-snug">
                                {group.companyName}
                              </h3>
                              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5">
                                <span className="text-xs text-zinc-500">{group.roles[0].location}</span>
                                <span className="text-zinc-700 text-xs">·</span>
                                <span className="text-xs text-zinc-500 font-mono">{getDateRange(group.roles)}</span>
                                <span className="text-zinc-700 text-xs">·</span>
                                <span className="text-xs font-medium text-indigo-400">{group.roles.length} roles</span>
                              </div>
                            </div>
                          </div>

                          <div className="px-6 py-5">
                            <div className="relative pl-5 ml-1 border-l border-zinc-700/40 space-y-6">
                              {group.roles.map((role, ri) => (
                                <div key={ri} className="relative">
                                  <div className="absolute -left-[1.43rem] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-900 border-2 border-indigo-500/60" />
                                  <p className="text-sm font-semibold text-zinc-200 mb-1">{role.title}</p>
                                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mb-3">
                                    <span className="text-xs text-zinc-500 font-mono">{role.date}</span>
                                    {role.type && (
                                      <>
                                        <span className="text-zinc-700 text-xs">·</span>
                                        <span className="text-xs text-zinc-500">{role.type}</span>
                                      </>
                                    )}
                                  </div>
                                  {role.points.length > 0 && (
                                    <ul className="space-y-2">
                                      {role.points.map((point, pi) => (
                                        <li key={pi} className="flex items-start gap-3">
                                          <span className="w-1 h-1 rounded-full bg-indigo-500/70 mt-2 shrink-0" />
                                          <p className="text-sm text-zinc-400 leading-relaxed">{point}</p>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </>
                      ) : (
                        /* Single role: everything in one block, no divider */
                        <div className="p-6">
                          <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                            {logo && (
                              <img
                                src={logo}
                                alt={group.companyName}
                                className="w-10 h-10 rounded-xl object-contain bg-white p-1 shrink-0"
                              />
                            )}
                            <div className="flex-1 min-w-0">
                              <h3 className="font-display font-bold text-zinc-100 text-base leading-snug">
                                {group.roles[0].title}
                              </h3>
                              <p className="text-sm text-zinc-400 mt-0.5">{group.companyName}</p>
                              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-1">
                                <span className="text-xs text-zinc-500 font-mono">{group.roles[0].date}</span>
                                <span className="text-zinc-700 text-xs">·</span>
                                <span className="text-xs text-zinc-500">{group.roles[0].location}</span>
                                {group.roles[0].type && (
                                  <>
                                    <span className="text-zinc-700 text-xs">·</span>
                                    <span className="text-xs text-zinc-500">{group.roles[0].type}</span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>

                          {group.roles[0].points.length > 0 && (
                            <ul className="space-y-2.5">
                              {group.roles[0].points.map((point, pi) => (
                                <li key={pi} className="flex items-start gap-3">
                                  <span className="w-1 h-1 rounded-full bg-indigo-500/70 mt-2 shrink-0" />
                                  <p className="text-sm text-zinc-400 leading-relaxed">{point}</p>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}

                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
