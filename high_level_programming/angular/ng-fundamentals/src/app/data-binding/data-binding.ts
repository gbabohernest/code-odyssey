import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [
    FormsModule
  ],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.scss'
})
export class DataBinding {
  title =  'Data Binding Fundamentals'
  one_way_binding = 'One way data binding'
  two_ways_binding  = 'two ways data binding'

  interpolation = 'Data binds from component to view'
  property_binding = 'example of property binding'
  img_alt = 'property binding '

  event_binding = 'listen for user interaction and respond: data flow one way.. from view to component '

  two_ways_data_binding = 'data flows bi-directional, view->component | component -> view'

  test_two_ways_binding = ''

  log() {
    console.log('event binding working')
  }
  onChange(){
    alert('you have selected')
}

}
