import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import experience from '../data/experience';
import AnimatedSection from './AnimatedSection';

const logos = {
  'Florida Department of Children & Families': '/dcf.png',
  'Florida State University': '/FSU 1.png',
  'Sri Bhramara Township Pvt. Ltd.': '/sri.png',
  'Unical Systems': '/Unical.jpg',
  'Oasis Infobyte': '/Oasis.jpg',
};

const companies = new Map();
for (const role of experience) {
  if (!companies.has(role.companyName)) companies.set(role.companyName, []);
  companies.get(role.companyName).push(role);
}

function Employer({ company, roles }) {
  const reduceMotion = useReducedMotion();
  const roleTypes = roles.map(role => role.type?.split(' · ') ?? []);
  const commonTypes = roleTypes[0].filter(type => roleTypes.every(parts => parts.includes(type)));
  const commonLocation = roles.every(role => role.location === roles[0].location) ? roles[0].location : '';
  const companyDetails = [commonLocation, ...commonTypes].filter(Boolean);

  return (
    <AnimatedSection className="experience-company">
      <div className="experience-employer">
        {logos[company] && <img src={logos[company]} alt="" width="44" height="44" loading="lazy" />}
        <div>
          <h3>{company}</h3>
          <p>{companyDetails.join(' · ')}</p>
        </div>
      </div>
      <ol className="experience-roles">
        {roles.map((role, index) => {
          const details = [
            commonLocation ? '' : role.location,
            ...roleTypes[index].filter(type => !commonTypes.includes(type)),
          ].filter(Boolean);
          return (
            <motion.li className="experience-role" key={role.title + role.date}
              initial={reduceMotion ? false : { opacity: 0.65, x: -7 }}
              whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.34, delay: Math.min(index * 0.06, 0.12), ease: 'easeOut' }}>
              <div className="experience-role-heading">
                <div>
                  <h4>{role.title}</h4>
                  {details.length > 0 && <p className="experience-meta">{details.join(' · ')}</p>}
                </div>
                <p className="experience-date">{role.date}</p>
              </div>
              {role.points?.length > 0 && (
                <ul>{role.points.map(point => <li key={point}>{point}</li>)}</ul>
              )}
            </motion.li>
          );
        })}
      </ol>
    </AnimatedSection>
  );
}

export default function Experience() {
  return (
    <section id="experience" tabIndex={-1} className="experience-section" aria-labelledby="experience-title">
      <div className="shell experience-shell">
        <AnimatedSection><h2 id="experience-title">Experience</h2></AnimatedSection>
        <div>
          {Array.from(companies, ([company, roles]) => <Employer key={company} company={company} roles={roles} />)}
        </div>
      </div>
    </section>
  );
}