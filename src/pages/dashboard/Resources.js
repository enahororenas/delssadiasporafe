import React from 'react'
import Wrapper from '../../assets/wrappers/Resources'
import {Navbar,BigSidebar,SmallSidebar} from '../../components'

const Resources = () => {
    const career = ['LinkedIn','Indeed','Careerealism','Job-Hunt','JobBait','Careercloud','GM4JH','Personalbrandingblog','Jibberjobber','Neighbors-helping-neighbors']
    const education = ['Coursera','edX','Khan Academy','Udemy','iTunesU Free Courses','MIT OpenCourseWare','Stanford Online','Codecademy','Open Culture Online Courses','Future learn']
    const prep = ['Ambitionbox','AceTheInterview','Geeksforgeeks','Leetcode','Gainlo','Careercup','Codercareer','InterviewUp','InterviewBest','Indianix']
    const resume = ['Zety Resume Builder','Resumonk','Resume dot com','VisualCV','Cvmaker','ResumUP','Resume Genius','Resumebuilder','Resume Baking','Enhancv']
  return (
    <Wrapper>
      <main className='dashboard'>
            <SmallSidebar/>
            <BigSidebar/>
                <div>
                    <Navbar top ='Resources'/>
                        <div className='dashboard-page'>
                            <div>
                            <h4 className='hsize'>Top 10 Sites for Career Development</h4>
                            <ol>{career.map((name) => <li key={name}>{name} </li>)}</ol>
                            <h4 className='hsize'>Top 10 Sites for Free Online Education</h4>
                            <ol>{education.map((name) => <li key={name}>{name} </li>)}</ol>
                            <h4 className='hsize'>Top 10 Sites for Interview Preparation</h4>
                            <ol>{prep.map((name) => <li key={name}>{name} </li>)}</ol>
                            <h4 className='hsize'>Top 10 Sites to review your resume for free</h4>
                            <ol>{resume.map((name) => <li key={name}>{name} </li>)}</ol>
                            </div>
                        </div>
                    </div>
                </main>
             </Wrapper>       
  )
}

export default Resources