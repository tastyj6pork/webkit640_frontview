import { ResponsivePie } from '@nivo/pie'
import { React } from "react";
import data from './NivoPie.json';

function NivoPie () {
    return (
        <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.45}
            padAngle={1}
            cornerRadius={4}
            activeOuterRadiusOffset={8}
            colors={{ scheme: 'pastel2' }}
            borderWidth={0}
            borderColor={{ theme: 'grid.line.stroke' }}
            enableArcLinkLabels={false}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        2
                    ]
                ]
            }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: '웹 프론트앤드'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: '웹 백앤드'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: '공통프로젝트'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: '팀프로젝트'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: '개별프로젝트'
                    },
                    id: 'lines'
                }
            ]}
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
        />
    )
}

export default NivoPie;