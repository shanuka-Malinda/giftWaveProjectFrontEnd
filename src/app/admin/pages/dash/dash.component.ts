import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.scss'
})
export class DashComponent implements OnInit{
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  //-------chart---------
  basicData: any;
  basicOptions: any;

  //----pie chart--------
  data: any;
  options: any;


  ngOnInit() {
    this.items = [
        { label: 'GiftWave' }, 
        { label: 'Admin' }, 
        { label: 'Dashboard' }
    ];

    this.home = { icon: 'pi pi-slack', routerLink: '/admin/dash' };


    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.basicData = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4','Q5','Q6'],
        datasets: [
            {
                label: 'Sales',
                data: [540, 325, 702, 620,400,1000],
                backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                borderWidth: 1
            }
        ]
    };

    this.basicOptions = {
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            },
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };  //close-bar-chart

    //---------pie-chart----------

    const documentStyle1 = getComputedStyle(document.documentElement);
        const textColor1 = documentStyle.getPropertyValue('--text-color');

        this.data = {
            labels: ['A', 'B', 'C','E','F'],
            datasets: [
                {
                    data: [300, 50, 100,150,75],
                    backgroundColor: [documentStyle1.getPropertyValue('--blue-500'), documentStyle1.getPropertyValue('--yellow-500'), documentStyle1.getPropertyValue('--green-500')],
                    hoverBackgroundColor: [documentStyle1.getPropertyValue('--blue-400'), documentStyle1.getPropertyValue('--yellow-400'), documentStyle1.getPropertyValue('--green-400')]
                }
            ]
        };


        this.options = {
            cutout: '60%',
            plugins: {
                legend: {
                    labels: {
                        color: textColor1
                    }
                }
            }
        };


}
}
