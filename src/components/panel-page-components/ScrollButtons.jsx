import { useState, useEffect } from "react"

const ScrollButtons = () => {

    const [panelDemoY, setPanelDemoY] = useState(0)
    const [twowayY, setTwowayY] = useState(0)
    const [comparisonY, setComparisonY] = useState(0)
    const [faqY, setFaqY] = useState(0)
    const [specsY, setSpecsY] = useState(0)

    const scrollToPanelDemo = () => {
        window.scrollTo({ top: panelDemoY, behavior: 'smooth' })
    }
    const scrollToTwoWay = () => {
        window.scrollTo({ top: twowayY, behavior: 'smooth' })
    }
    const scrollToComparison = () => {
        window.scrollTo({ top: comparisonY, behavior: 'smooth' })
    }
    const scrollToFAQ = () => {
        window.scrollTo({ top: faqY, behavior: 'smooth' })
    }
    const scrollToSpecs = () => {
        window.scrollTo({ top: specsY, behavior: 'smooth' })
    }


    useEffect(() => {

    let panelDemo = document.getElementById('panel-demo')
    let twoway = document.getElementById('two-way')
    let comparison = document.getElementById('comparison')
    let FAQ = document.getElementById('FAQ')
    let specs = document.getElementById('details')

    setPanelDemoY(panelDemo.getBoundingClientRect().y)
    setTwowayY(twoway.getBoundingClientRect().y)
    setComparisonY(comparison.getBoundingClientRect().y)
    setFaqY(FAQ.getBoundingClientRect().y)
    setSpecsY(specs.getBoundingClientRect().y)

    }, [])


    
    return(
        <div className="w-full py-4 max-w-6xl flex gap-4 flex-wrap justify-center xxs:justify-evenly">
      <button
        onClick={scrollToPanelDemo}
        className="rounded-full px-3 bg-[#F1F1F2] text-[#58585B] hover:bg-[#e7e7e7] hover:scale-105 hover:-translate-y-[2px] transition duration-100"
        >Panel Demo
      </button>

      <button
        onClick={scrollToTwoWay}
        className="rounded-full px-3 bg-[#F1F1F2] text-[#58585B] hover:bg-[#e7e7e7] hover:scale-105 hover:-translate-y-[2px] transition duration-100"
        >Two Way Voice
      </button>

      <button
        onClick={scrollToComparison}
        className="rounded-full px-3 bg-[#F1F1F2] text-[#58585B] hover:bg-[#e7e7e7] hover:scale-105 hover:-translate-y-[2px] transition duration-100"
        >Comparison
      </button>

      <button
        onClick={scrollToFAQ}
        className="rounded-full px-3 bg-[#F1F1F2] text-[#58585B] hover:bg-[#e7e7e7] hover:scale-105 hover:-translate-y-[2px] transition duration-100"
        >FAQs
      </button>

      <button
        onClick={scrollToSpecs}
        className="rounded-full px-3 bg-[#F1F1F2] text-[#58585B] hover:bg-[#e7e7e7] hover:scale-105 hover:-translate-y-[2px] transition duration-100"
        >Tech Specs
    </button>
    </div>
    )
}


export default ScrollButtons