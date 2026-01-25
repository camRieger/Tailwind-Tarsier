"use client"
import { useState, useEffect } from "react"
import Header from "@/app/components/header";
import CodeBlock from "@/app/components/codeBlock";
import ProblemDescription from "@/app/components/problemDescription";
import CodeVisualizer from "../components/codeVisualizer";
import {getMaps} from '@/app/utils/get-maps';

export default function Page(){

  const [problemCode, setProblemCode] = useState("");
  const [maps, setMaps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [map, setMap] = useState(null);
  const [problemAnswer, setProblemAnswer] = useState(problemCode);
  const [answer, setAnswer] = useState("");
  const [solutions, setSolutions] = useState([]);
  const [answerThreshold, setAnswerThreshold] = useState();
  const inputArray = answer.split(' ');

  useEffect(() => {
      async function fetchMaps() {
        try { 
          const mapsList = await getMaps();
          setMaps(mapsList);
        } catch (err) {
          setError('Failed to fetch maps: ' + err.message);
        } finally {
          setLoading(false);
        }
      }
      fetchMaps();
    }, []);

  useEffect(() => {
    if (maps.length > 0 && selectedId) {
      const selectedMap = maps.find((map) => map.id === selectedId);
      setMap(selectedMap);
    }
  }, [selectedId, maps]);

  useEffect(() => {
    if(maps.length == 0){
      return;
    }
    setSelectedId(maps[0].id)
  }, [maps]);

  useEffect(() => {
    if(map){
      setProblemCode(map.template);
      setSolutions(map.solution);
    }
  }, [map]);

  function ProcessRender(){
    setProblemAnswer(problemCode.replace("{answer}", answer))
  }

  async function ResultAnalyzer(){
    let counter = 0;
    let finalScore = 0;
    let finalSolutionWords = [];

    solutions.forEach(solution => {
      const solutionWords = solution.split(' ');
      inputArray.forEach(inWord => {
        solutionWords.forEach(solWord => {
          if(inWord === solWord){
            counter++;
          }
        });
      });
        if(counter > finalScore){
          finalScore = counter;
          finalSolutionWords = solutionWords;
        }
        counter = 0;
    });
    
    setAnswerThreshold((finalScore/finalSolutionWords.length)*100);
  } 

  if(loading || !map){
    return(
      <div>Loading Data...</div>
    )
  }
  else{
    return(
      <div className="flex flex-col h-screen w-full absolute">
        <div className="flex flex-row gap-20 bg-[#B87A00] h-3/5 pt-10 px-10 pb-10">
          <div className="flex flex-col h-full w-1/2">
            <div className="h-1/5">
              <Header title={'Tasty Bug'} optionSetter={setSelectedId} level={selectedId} levels={maps}/>
            </div>
            <div className="h-4/5">
              <ProblemDescription description={map.description} />
            </div>
          </div>
          <div className="flex flex-col h-full w-1/2 justify-center">
            <CodeBlock
              template={problemCode}
              setAnswer={setAnswer}
              confirm={(e) => (ProcessRender(), ResultAnalyzer())}
            />
          </div>
        </div>

        <div className="flex justify-center bg-[#FFCF60] h-2/5">
          <div className="m-4 w-2/5 bg-amber-100 rounded-2xl">

          </div>
        </div>
      </div>
    )
  }
}