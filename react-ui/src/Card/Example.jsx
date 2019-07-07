import React, { useState, useEffect } from 'react'
import Box from './Box'
import championsJson from '../champions.json'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import classesJson from '../classes.json'
let championsArray = []
for (let championName in championsJson) {
	championsArray.push(championsJson[championName])
}
console.log(championsArray)
const Container = () => {
	const [champions, setChampions] = useState([])
	const [championInput, setChampionInput] = useState("")
	const [activeChampions, setActiveChampions] = useState([])
	const [bonuses, setBonuses] = useState([]);

	const filterChampions = () => {
		let filteredChampions = championsArray.filter((champion) => {
			if (champion.name.toLowerCase().indexOf(championInput.toLowerCase()) !== -1)
				return true
			return false
		})
		console.log(filteredChampions)
		setChampions(filteredChampions)
	}
	const addToActiveChampion = (champion) => {
		setActiveChampions([...activeChampions, champion])
	}
	useEffect(() => {
		let championClasses = []
		let classesCount = {}

		for (const champion of activeChampions) {
			championClasses.push(...champion.class)
		}
		for (let championClass of championClasses) {
			championClass = championClass.toLowerCase()
			if (championClass === classesJson[championClass].key) {
				if (classesCount[championClass] !== undefined) {
					classesCount[championClass] = classesCount[championClass] + 1
				}
				else {
					classesCount[championClass] = 1
				}
			}
		}
		console.log(classesCount)
		let bonuses = []
		for (const activeClass in classesCount) {
			if (classesCount[activeClass] >= classesJson[activeClass].bonuses[0].needed) {
				bonuses.push(classesJson[activeClass].bonuses[0].effect)
				console.log("you have this bonus! : " + classesJson[activeClass].bonuses[0].effect)
			}
		}
		setBonuses(bonuses)
	}, [activeChampions]);
	return (
		// ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json
		<div>
			<div id="championsContainer">
				<InputGroup className="mb-3">
					<FormControl
						placeholder="Champion Name"
						aria-label="Champion Name"
						value={championInput}
						onChange={(event) => {
							setChampionInput(event.target.value)
						}}
						onKeyDown={(event) => {
							filterChampions()
						}}
					/>
				</InputGroup>
				{champions.length > 0 && (<div id="availableChampions">
					{champions.map((champion) => {
						return <Box name={champion.name} keyName={champion.key} addToActiveChampion={() => addToActiveChampion(champion)} championInfo={champion}></Box>
					})}
				</div>)
				}
			</div>
			{bonuses.length > 0 && <div id="bonuses">
				{bonuses.map((value, index) => {
					return <div>{value}</div>
				})}
			</div>}
		</div>
	)
}
export default Container