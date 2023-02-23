import * as React from "react";
import * as d3 from 'd3';
import {Grid} from "@mui/material";
import {useD3} from "../../hooks/useD3";
import {createFibonacciSequence} from "../../utils/PageTwoUtils";
import BoldCheckBoxButton from "../mui-components/BoldCheckBoxButton";

/*
- The second page will show a function on a graph using D3. The function to draw is Fibonacci in the x range of [0,10]
  When loaded the page shows the X and Y axis, and a button, with the same style as the one on the first page, but with
  the text “Draw” on it. After pressing a button, the function line is added to the graph.

  [0,   1,  1,  2,  3,  5,  8,  13, 21, 34, 55]
  [0,   1,  2,  3,  4,  5,  6,  7,  8,  9,  10]

 */
export default function PageTwo() {
    const [displayFibonacciSequence, setDisplayFibonacciSequence] = React.useState(false);
    const height = 600;
    const width = 800;

    const data = createFibonacciSequence(10);
    const ref = useD3(
        (svg) => {
            const margin = { top: 20, right: 30, bottom: 30, left: 40 };

            const x = d3
                .scaleBand()
                .domain(data.map((d) => d.xIndex))
                .rangeRound([margin.left, width - margin.right])
                .padding(0.1);

            const y1 = d3
                .scaleLinear()
                .domain([0, data[data.length - 1].fibValue])
                .rangeRound([height - margin.bottom, margin.top]);

            const xAxis = (g) =>
                g.attr("transform", `translate(0,${height - margin.bottom})`).call(
                    d3
                        .axisBottom(x)
                        .tickValues(
                            d3
                                .ticks(...d3.extent(x.domain()), width / 40)
                                .filter((v) => x(v) !== undefined)
                        )
                        .tickSizeOuter(0)
                );

            const y1Axis = (g) =>
                g
                    .attr("transform", `translate(${margin.left},0)`)
                    .style("color", "steelblue")
                    .call(d3.axisLeft(y1).ticks(null, "s"))
                    .call((g) => g.select(".domain").remove())
                    .call((g) =>
                        g
                            .append("text")
                            .attr("x", -margin.left)
                            .attr("y", 10)
                            .attr("fill", "currentColor")
                            .attr("text-anchor", "start")
                            .text(data.y1)
                    );

            svg.select(".x-axis").call(xAxis);
            svg.select(".y-axis").call(y1Axis);
            svg
                .select(".plot-area")
                .attr("fill", "steelblue")
                .selectAll(".bar")
                .data(data)
                .join("rect")
                .attr("class", "bar")
                .attr("x", (d) => x(d.xIndex))
                .attr("width", x.bandwidth())
                .attr("y", (d) => y1(d.fibValue))
                .attr("height", (d) => y1(0) - y1(d.fibValue));
        },
        [displayFibonacciSequence]
    );

    return (
        <>
            <Grid container flexDirection={"column"} alignContent={"center"} >
                <Grid item sx={{marginTop : '30px'}}>
                    <svg
                        ref={ref}
                        style={{
                            height,
                            width
                        }}
                    >
                        {displayFibonacciSequence && <g className="plot-area" />}
                        <g className="x-axis" />
                        <g className="y-axis" />
                    </svg>
                </Grid>
                <Grid item sx={{display: 'flex', justifyContent: "center"}}>
                    {!displayFibonacciSequence ? <BoldCheckBoxButton checked={false} onClickFunction={() => setDisplayFibonacciSequence(!displayFibonacciSequence)}>Draw</BoldCheckBoxButton>
                        : <BoldCheckBoxButton checked={true} onClickFunction={()=>setDisplayFibonacciSequence(!displayFibonacciSequence)}>Erase</BoldCheckBoxButton>
                    }
                </Grid>
            </Grid>
        </>
    );
}
