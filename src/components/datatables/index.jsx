import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import './_style.css'

const $  = require('jquery');
$.Datatable = require('datatables.net');

const Datatables = ({data}) => {

  const ref = useRef(null)

  useEffect(() => {
    $(ref.current).DataTable({
      dom: '<"wrapper-header"<"wrapper-top-left"f<"advancedOptions">><"utility">>rt<"wrapper-bottom"<"wrapper-bottom-left"li><"wrapper-bottom-right"<"coba">p>>',
      data,
      columnDefs: [
        {
          targets: 0,
          orderable: false,
          render: function (data, type, row) {
            return '<input type="checkbox"  selectRow="true" class="dt-checkboxes select-checkbox dt-center">'
          },
          title: '<input type="checkbox"  selectRow="true" class="dt-checkboxes select-checkbox dt-center">'
        },
        {
          targets: 1,
          title: "Fee Type Code"
        },
        {
          targets: 2,
          title: "Fee Type Name"
        },
        {
          targets: 3,
          title: "Description",
          width: '30%'
        },
        {
          targets: 4,
          title: "Status."
        },
        {
          targets: 5,
          data: null,
          title: "Actions",
          defaultContent: '<i class="fa-solid fa-file-pen m-r-10"></i><i class="fa-solid fa-eye m-r-10"></i><i class="fa-solid fa-trash"></i>'
        },
      ],
      select: {
        style: 'os',
        selector: 'td:first-child'
      },
      order: [[1, 'asc']],
      retrieve: true,
      language: {
        info: "Showing _START_ - _END_ of _TOTAL_",
        lengthMenu: "_MENU_",
        search: "",
        searchPlaceholder: 'Search...',
        paginate: {
          next: '<i class="fa-solid fa-angle-right"></i>',
          previous: '<i class="fa-solid fa-angle-left"></i>',
        },
      },
    })

    $("div.advancedOptions").html('<div class="advanced">Advanced Options <i class="fa-solid fa-angles-down arrowdoubledown"></i></div>')

    $("div.utility").html('<div class="circle"><i class="fa-solid fa-download icon-white"></i></div><div class="circle"><i class="fa-solid fa-print icon-white"></i></div><button class="createnew"><i class="fa-solid fa-plus"></i> Create New</button>')
  }, [])

  return (
    <table id="table_id" data-order="[]" className="display table" ref={ref}>
    </table>
  )
}

Datatables.propTypes = {
  data: PropTypes.array.isRequired
}

export default Datatables