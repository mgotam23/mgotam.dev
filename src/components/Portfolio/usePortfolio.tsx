import * as config from "@/config/config"

const usePortfolio = () => {
  const {
    fullName,
    firstName,
    lastName,
    jobTitle,
    email,
    github,
    linkedin,
    twitter,
    portfolio,
    aboutme,
    aboutMeShort,
    skills,
    careerTimeline
  } = config;

  return {
    fullName,
    firstName,
    lastName,
    jobTitle,
    email,
    github,
    linkedin,
    twitter,
    portfolio,
    aboutme,
    aboutMeShort,
    skills,
    careerTimeline
  };
};

export default usePortfolio;
