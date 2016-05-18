      xref: 'XRef'
export default {
  dashboard: {
    title: 'O que você gostaria de fazer?'
  },
  navigation: {
    imaging: 'Exame de Imagem',
    Estoque: 'Estoque',
    patients: 'Pacientes',
    appointments: 'Consultas',
    medication: 'Medicação',
    labs: 'Laboratórios',
    billing: 'Faturamento',
    administration: 'Administração',
    subnav: {
      requests: 'Requisições',
      items: 'Itens',
      completed: 'Completo',
      new_request: 'Nova Requisição',
      Estoque_received: 'Estoque Recebido',
      reports: 'Relatórios',
      patient_listing: 'Listando Pacientes',
      new_patient: 'Novos Pacientes',
      this_week: 'Esta Semana',
      today: 'Hoje',
      search: 'Procurar',
      add_appointment: 'Adicionar Consulta',
      dispense: 'Dispensar',
      return_medication: 'Retorno de Medicação',
      invoices: 'Pedidos',
      new_invoice: 'Novo Pedido',
      prices: 'Preços',
      price_profiles: 'Perfis de Preço',
      lookup_lists: 'Lista de Pesquisas',
      address_fields: 'Campos de Endereços',
      load_db: 'Carregar DB',
      users: 'Usuários',
      new_user: 'Novo Usuário',
      user_roles: 'Funções de Usuários'
    },
    actions: {
      logout: 'Sair',
      login: 'Entrar'
    },
    about: 'Sobre a Onix Interativa'
  },
  user: {
    plus_new_user: '+ novo usuário',
    users_page_tile: 'Listando Usuários'
  },
  admin: {
    address_options: 'Opções de Endereços',
    lookup_lists: 'Lista de Pesquisas',
    load_db: 'Load DB',
    user_roles: 'Funções de Usuário',
    users: 'Users',
    address: {
      address1_label: 'Endereço 1',
      address2_label: 'Endereço 2',
      address3_label: 'Endereço 3',
      address4_label: 'Endereço 4',
      include1_label: 'Incluir 1',
      include2_label: 'Incluir 2',
      include3_label: 'Incluir 3',
      include4_label: 'Incluir 4',
      titles: {
        options_saved: 'Opções Salvas'
      },
      messages: {
        address_saved: 'As opções de endereços foram salvos.'
      },

      new_title: 'Opções de Endereço',
      edit_title: 'Opções de Endereço',
      address_label: 'Endereço'
    },
    loaddb: {
      progress_message: 'Aguarde enquanto o seu banco de dados é carregado.',
      progress_title: 'Carregando Banco de Dados',
      display_alert_title: 'Selecione o Arquivo',
      display_alert_message: 'Selecione o arquivo',
      Erro_display_alert_title: 'Erro ao carregar',
      Erro_display_alert_message: `O banco de dados não pôde ser importado. O erro foi: {{Erro}}`,
      edit_title: 'Carregar DB'
    },
    lookup: {
      delete_value_Estoque_type_medication_title: 'Não é possível deletar medicação',
      delete_value_Estoque_type_medication_message: 'O tipo de Estoque medicação não pode ser excluído porque ele é necessário para o módulo de medicação.',
      delete_value_lab_pricing_type_procedure_title: 'Não é possível deletar o tipo de preço do laboratório',
      delete_value_lab_pricing_type_procedure_message: 'O tipo de preço do procedimento de laboratório não pode ser excluído porque ele é necessário para o módulo de laboratório.',
      delete_value_imaging_pricing_type_procedure_title: 'Não é possível excluir Tipo de preço',
      delete_value_imaging_pricing_type_procedure_message: 'O tipo de preço para o procedimento de imagem não pode ser excluído porque ele é necessário para o módulo de imagem.',
      delete_value_visit_type_admission_title: 'Não é possível deletar novo tipo visita ',
      delete_value_visit_type_admission_message: 'O tipo de Visita de Admissão não pode ser excluído porque ele é necessário para o módulo de visitas.',
      delete_value_visit_type_imaging_title: 'Não é possível excluir imagem do Tipo Visita',
      delete_value_visit_type_imaging_message: 'O tipo de imagem Visita não pode ser excluído porque ele é necessário para o módulo de Imagem.',
      delete_value_visit_type_lab_title: 'Não é possível excluir tipo de visita de laboratório',
      delete_value_visit_type_lab_message: 'O tipo Visita de Laboratório não pode ser excluído porque ele é necessário para o módulo de laboratório.',
      delete_value_visit_type_pharmacy_title: 'Não é possível excluir tipo de visita Farmácia',
      delete_value_visit_type_pharmacy_message: 'O tipo Lab Visita não pode ser excluído porque ele é necessário para o módulo de medicação.',
      alert_import_list_title: 'Selecione o arquivo para importar',
      alert_import_list_message: 'Por favor Selecione o arquivo para importar.',
      alert_import_list_save_title: 'Lista Importada',
      alert_import_list_save_message: 'A lista de pesquisa foi importada!',
      alert_import_list_update_title: 'Lista Salva',
      alert_import_list_update_message: 'A lista de pesquisa foi salva.',
      page_title: 'Lista de Pesquisa',
      edit: {
        template: {
          add_title: 'Adicionar Valor',
          edit_title: 'Editar Valor',
          update_button_text_add: 'Adicionar',
          update_button_text_update: 'Atualizar',
          label_title: 'Valor'
        }
      },
      anesthesia_types: 'Tipos de Anestesias',
      anesthesiologists: 'Anestesiologista',
      billing_categories: 'Categoria de Faturamento',
      clinic_list: 'Local',
      country_list: 'País',
      diagnosis_list: 'Diagnóstico',
      cpt_code_list: 'CPT Código',
      expense_account_list: 'Contas de Despesas',
      aisle_location_list: 'Prateleira do Local do Estoque',
      warehouse_list: 'Local do Estoque',
      Estoque_types: 'Tipos de Estoque',
      imaging_pricing_types: 'Tipos de Preços de Imagem',
      lab_pricing_types: 'Tipos de Preços de Laboratório',
      patient_status_list: 'Lista de Status de Pacientes',
      physician_list: 'Médicos',
      procedure_list: 'Procedimentos',
      procedure_locations: 'Locais de Procedimentos',
      procedure_pricing_types: 'Tipos de Preços de Procedimentos',
      radiologists: 'Radiologistas',
      unit_types: 'Tipos de Unidade',
      vendor_list: 'Fornecedor',
      visit_location_list: 'Local de Visita',
      visit_types: 'Tipos de Visita',
      ward_pricing_types: 'Tipos de Preços de Enfermaria'
    },
    roles: {
      capability: {
        admin: 'Administração',
        load_db: 'Carregar Banco de Dados',
        update_config: 'Atualizar Configurações',
        appointments: 'Marcações',
        add_appointment: 'Nova Consulta',
        billing: 'Faturamento',
        add_charge: 'Adicionar Carga',
        add_pricing: 'Adicionar Preço',
        add_pricing_profile: 'Adicionar Perfil de Preço',
        add_invoice: 'Adicionar Fatura',
        add_payment: 'Adicionar Pagamento',
        delete_invoice: 'Deletar Pedido',
        delete_pricing: 'Deletar Preço',
        delete_pricing_profile: 'Deletar Perfil de Preço',
        edit_invoice: 'Editar pedido',
        invoices: 'Pedidos',
        override_invoice: 'Sobrepor Pedido',
        pricing: 'Preço',
        patients: 'Pacientes',
        add_diagnosis: 'Adicionar Diagnóstico',
        add_photo: 'Adicionar Foto',
        add_patient: 'Adicionar Paciente',
        add_visit: 'Adicionar Visitante',
        add_vitals: 'Add Vitals',
        admit_patient: 'Admitir Paciente',
        delete_photo: 'Deletar Foto',
        delete_patient: 'Deletar Paciente',
        delete_appointment: 'Deletar Consulta',
        delete_diagnosis: 'Deletar Diagnóstico',
        delete_procedure: 'Deletar Procedimento',
        delete_socialwork: 'Deletar Serviço Social',
        delete_vitals: 'Deletar Vitals',
        delete_visit: 'Deletar Visitantes',
        discharge_patient: 'Discharge Patient',
        patient_reports: 'Relatório de Pacientes',
        visits: 'Visitas',
        medication: 'Medicação',
        add_medication: 'Add Medicação',
        delete_medication: 'Deletar Medicação',
        fulfill_medication: 'Preencher Medicação',
        labs: 'Laboratórios',
        add_lab: 'Adicionar Laboratório',
        complete_lab: 'Completar laboratório',
        delete_lab: 'Deletar laboratório',
        imaging: 'Imagem',
        add_imaging: 'Adicionar Imagem',
        complete_imaging: 'Completar Imagem',
        delete_imaging: 'Deletar Imagem',
        Estoque: 'Estoque',
        add_Estoque_request: 'Adicionar Requisição de Estoque',
        add_Estoque_item: 'Adicionar Item de Estoque',
        add_Estoque_purchase: 'Adicionar Compra Estoque',
        adjust_Estoque_location: 'Ajustar Local de Estoque',
        delete_Estoque_item: 'Deletar Item Estoque',
        delete_Estoque_purchase: 'Deletar Compra de Estoque',
        fulfill_Estoque: 'Preencher Estoque',
        user_roles: 'Funções de Usuário'
      },
      messages: {
        role_saved: 'O {{roleName}} papel foi salvo.'
      },
      titles: {
        role_saved: 'Papel Salvo'
      }
    }
  },
  labels: {
    cptcode: 'CPT Código',
    loading: 'Carregando',
    name: 'Nome',
    patient: 'Paciente',
    prescriber: 'Médico',
    quantity: 'Quantidade',
    requested_on: 'Em Solicitação',
    date: 'Data',
    date_of_birth: 'Data de Nascimento',
    date_of_birth_short: 'Nascimento',
    date_requested: 'Data requerida',
    date_completed: 'Data Completada',
    description: 'Descrição',
    requested_by: 'Requisitado por',
    fulfill: 'Preencher',
    fulfill_request: 'Preencher Requisição',
    fulfill_request_now: 'Preencher Requisição Agora',
    actions: 'Ações',
    action: 'Ação',
    notes: 'Notas',
    edit: 'Editar',
    image_orders: 'Pedidos de Imagem',
    lab_orders: 'Pedidos de Laboratórios',
    patient_history: 'Histórico do Paciente',
    imaging_type: 'Tipo de Imagem',
    result: 'Resultado',
    results: 'Resultados',
    visit: 'Visita',
    requests: 'Requisições',
    completed: 'Completados',
    id: 'Id',
    on: 'em',
    type: 'Tipo',
    sex: 'Sexo',
    age: 'Idade',
    username: 'Nome',
    email: 'Email',
    role: 'Função',
    delete: 'Deletar',
    user_can_add_new_value: 'O usuário pode adicionar novos valores',
    value: 'Valor',
    lookup_type: 'Tipo de Pesquisa',
    import_file: 'Importar Arquivo',
    file_load_successful: 'Arquivo carregado com sucesso.',
    file_to_Load: 'Carregar arquivo',
    start_time: 'Início',
    start_date: 'Data de Início',
    end_time: 'Fim',
    end_date: 'Data Final',
    doc_read: 'Docs Read',
    doc_written: 'Docs Written',
    display_name: 'Mostra Nome',
    password: 'Senha',
    edit_user: 'Editar Usuário',
    new_user: 'Novo Usuário',
    delete_user: 'Deletar usuário',
    medication: 'Medicação',
    status: 'Status',
    add_new_outpatient_visit: '--Nova visita de ambulatório--',
    prescription: 'Prescrição',
    prescription_date: 'Data da Prescrição',
    bill_to: 'Bill To',
    pull_from: 'Pull From',
    fulfilled: 'Fulfilled',
    delete_request: 'Deletar Request',
    location: 'Location',
    provider: 'Provider',
    with: 'With',
    all_day: 'All Day',
    physician: 'Médico',
    assisting: 'Assistente',
    anesthesia: 'Anestesia',
    procedures: 'Procedimentos'
  },
  messages: {
    no_items_found: 'Nenhum item encontrado.',
    no_history_available: 'Nenhuma história disponível.',
    create_new_record: 'Criar novo registro?',
    create_new_user: 'Criar novo usuário?',
    no_users_found: 'Nenhum usuário encontrado.',
    are_you_sure_delete: 'Tem certeza que deseja deletar o usuário {{user}}?',
    user_has_been_saved: 'O usuário foi salvo.',
    user_saved: 'Usuário Salvo',
    on_behalf_of: 'Em nome de ',
    new_patient_has_to_be_created: 'Um novo paciente precisa ser criado ... Por favor, aguarde ..',
    no_notes_available: 'Nenhuma nota clínica adicionais estão disponíveis para esta visita.',
    sorry: 'Desculpe, algo deu errado ...'
  },
  alerts: {
    please_wait: 'Por favor, espere'
  },
  buttons: {
    complete: 'Completo',
    cancel: 'Cancelar',
    close: 'Fechar',
    return_button: 'Retornar',
    barcode: 'Código de Barras',
    add: 'Adicionar',
    update: 'Atualizar',
    ok: 'Ok',
    fulfill: 'Preencher',
    remove: 'Remover',
    delete: 'Deletar',
    new_user: 'Novo Usuário',
    add_value: 'Adicionar Valor',
    new_note: 'Nova Nota',
    import: 'Importar',
    load_file: 'Carregar Arquivo',
    new_request: 'Nova Requisição',
    all_requests: 'Todas as requisições',
    dispense: 'Dispensar',
    new_item: '+ novo item',
    new_request_plus: '+ new requisição',
    add_visit: 'Add Visita',
    search: 'Procurar'
  },
  login: {
    messages: {
      sign_in:  'por favor espere',
      Erro:    'Nome de usuário ou senha está incorreta.'
    },
    labels: {
      password: 'Senha',
      username: 'Usuário',
      sign_in:  'Sign in'
    }
  },
  Estoque: {
    edit: {
      cost: 'Custo por unidade:',
      delivered: 'Entregue para:',
      location: 'Localização Ajustada:',
      prescription: 'Prescrição para:',
      pulled: 'Puxado de:',
      quantity: 'Quantidade na Conclusão:',
      reason: 'Motivo:',
      returned: 'Devolvido',
      transferred_from: 'Transferido de :',
      transferred_to: 'Transferido para:'
    },
    labels: {
      action: 'Ação',
      add: 'Adicionar',
      adjust: 'Ajuste',
      adjustment_date: 'Data de ajuste',
      adjustment_for: 'Ajuste para',
      adjustment_type: 'Tipo de Ajuste',
      aisle: 'Prateleira',
      aisle_location: 'Local da prateleira',
      all_Estoque: 'Todo Estoque',
      bill_to: 'Bill To',
      consume_purchases: 'As compras do consumidor',
      consumption_rate: 'Taxa de Consumo',
      cost: 'Custo',
      cost_per_unit: 'Custo por unidade',
      cross_reference: 'Referência Cruzada',
      current_quantity: 'Quantidade atual',
      date_completed: 'Data de Conclusão',
      date_effective: 'Data efetiva',
      date_end: 'Data Final',
      date_start: 'Data de Início',
      date_received: 'Data Recebida',
      date_tranferred: 'Dados transferidos',
      days_left: 'Dias restantes',
      delivery_aisle: 'Prateleira de Entrega',
      delivery_location: 'Local de Entrega',
      distribution_unit: 'Unidade de distribuição',
      delete_item: 'Deletar Item',
      details: 'Detalhes',
      edit_item: 'Editar Item',
      expense: 'Despesas Para',
      expiration_date: 'Data de Validade',
      fulfill_request: 'Preencher Requisição',
      fulfill_request_now: 'Preencher requisição agora',
      gift: 'Gift in Kind',
      gift_usage: 'Gift in Kind Usage',
      gift_in_kind_no: 'N',
      gift_in_kind_yes: 'S',
      Estoque_consumed: 'Inventario Consumida',
      Estoque_item: 'Inventario Item',
      Estoque_obsolence: 'Inventario Obsoleto',
      invoice_items: 'Pedido de Itens',
      invoice_line_item: 'Pedido Linha Item',
      invoice_number: 'Número do Pedido',
      item: 'Item',
      items: 'Itens',
      item_number: 'Número do Item',
      location: 'Local',
      locations: 'Locais',
      name: 'Nome',
      mark_as_consumed: 'Marcar como consumido',
      new_item: 'Novo Item',
      original_quantity: 'Quantidade Original',
      print: 'Imprimir',
      print_barcode: 'Imprimir Código de Barras',
      printer: 'Impressora',
      pull_from: 'Pull From',
      purchases: 'Compras',
      purchase_cost: 'Custo de compra',
      purchase_info: 'Informação de Compra',
      quantity: 'Quantidade ({{unit}})',
      quantity_available: 'Quantidade Available',
      quantity_on_hand: 'Quantidade on Hand',
      quantity_requested: 'Quantidade Requested',
      rank: 'Classificação',
      reason: 'Motivo',
      remove: 'Remover',
      reorder_point: 'Ponto de Reabastecimento',
      requested_items: 'Item Requisitados',
      sale_price_per_unit: 'Preço de Venda por Unidade',
      save: 'Salvar',
      serial_number: 'Serial/Lote Número',
      total: 'Total',
      total_cost: 'Custo Total',
      total_received: 'Total Recebido: {{total}}',
      transaction: 'Transação',
      transactions: 'Transações',
      transfer: 'Transferir',
      transfer_from: 'Transferir de',
      transfer_to: 'Transferência para Localização',
      transfer_to_aisle: 'Transferência de prateleira',
      unit: 'Unidade',
      unit_cost: 'Custo por Unidade',
      vendor: 'Fornecedor',
      vendor_item_number: 'Número do Item do Fornecedor'
    },
    messages: {
      adjust: 'Por favor, ajustar as quantidades sobre o local (s) apropriado para a conta para a diferença de {{difference}}.',
      create_request: 'Criar um novo pedido?',
      delete: 'Você tem certeza que deseja deletar {{name}}?',
      item_not_found: 'O item de estoque <strong>{{item}}</strong> não foi encontrado.<br>Se você gostaria de criar um novo item de estoque, preencha as informações abaixo.<br>Caso contrário, clique no botão cancelar.',
      loading: 'Carregando Transações ...',
      purchase_saved: 'As compras do estoque foram salvas com sucesso.',
      no_requests: 'Nenhuma requisição encontrada.',
      no_items: 'Nenhum item encontrado.',
      quantity: 'A quantidade total de <strong>({{quantity}})</strong> não confere com a quantidade total no local <strong>({{locationQuantity}})</strong>.',
      remove_item: 'Tem certeza que deseja remover este item do pedido?',
      remove_item_request: 'Tem certeza que deseja remover este item desta requisição?',
      request_fulfilled: 'A requisição do estoque foi preenchida.',
      request_updated: 'A requisição do estoque foi atualizada.',
      warning: 'Por favor preencha os campos requeridos (marcado com *) e corrija os erros antes de adicionar.'
    },
    reports: {
      rows: {
        adjustments: 'Ajustes',
        adjustments_total: 'Total de Ajustes',
        balance_begin: 'Balanço Inicial',
        balance_end: 'Balanço Final',
        category: 'Categoria',
        consumed: 'Utilizado',
        consumed_gik: 'GiK Utilizado',
        consumed_gik_total: 'Total GiK Utilizado',
        consumed_puchases: 'Compras Feitas',
        consumed_purchases_total: 'Total Purchases Feitas',
        consumed_total: 'Total Utilizado',
        err_in_fin_sum: 'Erros em _generateFinancialSummaryReport: ',
        err_in_find_pur: 'Erro em _findEstoqueItemsByPurchase: ',
        err_in_find_req: 'Erro em _findEstoqueItemsByRequest: ',
        expenses_for: 'Despesas para: ',
        no_account: '(Sem conta)',
        subtotal: 'Subtotal: ',
        subtotal_for: 'Subtotal para {{category}} - {{account}}: ',
        total: 'Total: ',
        total_for: 'Total para {{var}}: ',
        total_purchases: 'Total Compras',
        transfer1: '{{quantity}} de {{location}}',
        trasnfer2: 'From: {{source}} Para: {{target}}'
      },
      adjustment: 'Ajustes detalhados',
      days_supply: 'Dias de abastecimentos',
      expense_detail: 'Despesa Detalhada',
      expense_sum: 'Sumário de Despesas',
      expiration: 'Data de Vencimento',
      export: 'Exportar Relatório',
      fields: 'Campos Incluídos',
      finance: 'Sumário Financeiro',
      generate: 'Gerar Relatório',
      inv_location: 'Inventário por local',
      inv_valuation: 'Avaliação do Estoque',
      purchase_detail: 'Compra Detalhada',
      purchase_sum: 'Sumário de Compras',
      report_type: 'Tipo de Relatório',
      stock_transfer_detail: 'Transferência de Estoque Detalhada',
      stock_transfer_sum: 'Sumário de Transferência de Estoque',
      stock_usage_detail: 'Uso do estoque detalhado',
      stock_usage_sum: 'Sumário do Uso do estoque'
    },
    titles: {
      add_purchase: 'Adicionar Compra',
      add_request: 'Nova Requisição',
      adjustment: 'Ajustes',
      edit_purchase: 'Editar Compra',
      edit_request: 'Editar Requisição',
      inventory_item: 'Novo Item de Estoque',
      inventory_report: 'Relatório de Estoque',
      purchase_saved: 'Compras Salvas',
      quick_add_title: 'Novo item de estoque',
      remove_item: 'Remover Item',
      request_fulfilled: 'Requisição Preenchida',
      request_updated: 'Requisição Atualizada',
      transfer: 'Transferir Items',
      warning: 'Cuidado!!!!!'
    }
  },
  imaging: {
    page_title: 'Requisição de Imagem',
    section_title: 'Imagem',
    buttons: {
      new_button: '+ nova imagem'
    },
    labels: {
      radiologist: 'Radiologista',
      add_new_visit: '--Add Nova Visita--'
    },
    messages: {
      no_completed: 'nenhum item completo encontrado.'
    },
    titles: {
      completed_imaging: 'Exame Finalizado',
      edit_title: 'Editar Requisição de Imagem',
      new_title: 'Nova Requisição de Imagem'
    },
    alerts: {
      completed_title: 'Requisição de Imagem Completa',
      completed_message: 'A requisição de imagem foi realizada.',
      saved_title: 'Requisição de Imagem salva',
      saved_message: 'A requisição de imagem foi realizada.'
    }
  },
  medication: {
    page_title: 'Medicação Requisitada',
    section_title: 'Medicação',
    return_medication: 'Retorno da Medicação',
    buttons: {
      dispense_medication: 'dispensa de medicação',
      new_button: '+ nova requisição',
      return_medication: 'retorno de medicação'
    },
    titles: {
      completed_medication: 'Medicação Realizada',
      edit_medication_request: 'Editar Requisição de Medicação',
      new_medication_request: 'Nova Requisição de Medicação'
    },
    messages: {
      create_new: 'Criar uma nova requisição de medicação?',
      confirm_deletion: 'Tem certeza que deseja deletar a requisição de medicação?'
    },
    labels: {
      refills: 'Recargas',
      quantity_requested: 'Quantidade Requisitada',
      quantity_dispensed: 'Quantidade Dispensada',
      quantity_distributed: 'Quantidade Distribuída',
      quantity_to_return: 'Quantidade para devolução',
      return_location: 'Local de devolução',
      return_aisle: 'Prateleira de Devolução',
      return_reason: 'Motivo da Devolução',
      adjustment_date: 'Data de Ajuste',
      credit_to_account: 'Creditar na conta'
    },
    alerts: {
      returned_title: 'Medication Returned',
      returned_message:  'A medicação foi marcada como devolução.',
      saved_title: 'Requisição da Medicação foi salva',
      saved_message: 'Registro salvo.',
      fulfilled_title: 'A requisição da medicação foi preenchida.'
    }
  },
  appointments: {
    current_screen_title: 'Lista de Consultas',
    edit_title: 'Editar Consulta',
    new_title: 'Nova Consulta',
    section_title: 'Consultas',
    this_week: 'Consultas esta semana',
    missed: 'Consultas Perdidas',
    search_title: 'Procurar Consultas',
    today_title: 'Consultas de Hoje',
    messages: {
      delete_appointment_message: 'Tem certeza que deseja deletar esta consulta?',
      end_time_later_than_start: 'Por favor, selecione um horário de término mais tarde do que a hora de início.'
    },
    buttons: {
      new_button: '+ nova consulta'
    }
  },
  visits: {
    edit: {
      actions: 'Ações',
      edit: 'Editar',
      date: 'Data',
      authored_by: 'Autoria de',
      note: 'Nota',
      notes: 'Notas',
      new_note: 'Nova Nota',
      visit_information: 'Informações da visita',
      new_appointment: 'Nova Consulta',
      add_diagnosis: 'Adicionar diagnóstico',
      diagnosis: 'Diagnóstico',
      delete: 'Deletar',
      procedure: 'Procedimento',
      procedures: 'Procedimentos',
      new_procedure: 'Novo Procedimento',
      labs: 'Laboratório',
      new_lab: 'Novo laboratório',
      imaging: 'Imagem',
      new_imaging: 'Noao Imagem',
      medication: 'Medicação',
      new_medication: 'Nova Medicação'
    }
  },
  labs: {
    section_title: 'Laboratório',
    requests_title: 'Requisição de Exame',
    edit_title: 'Editar Requisição de Exame',
    new_title: 'Nova Requisição de Exame',
    delete_title: 'Deletar Requisição',
    completed_title: 'Exames Completos',
    labels: {
      lab_type: 'Tipo de Lab.',
      add_new_visit: '--Add Nova Visita--'
    },
    messages: {
      no_items_found: 'Lab. não encontrado.',
      create_new_record: 'Create a new record?',
      confirm_deletion: 'Tem certeza que deseja deletar esta requisição laboratorial?',
      no_completed: 'Não encontrado'
    },
    buttons: {
      new_button: '+ novo laboratório'
    },
    alerts: {
      request_completed_title: 'Requisição de laboratório realizada',
      request_completed_message: 'Requisição de laboratório realizada.',
      request_saved_title: 'Requisição salva.',
      request_saved_message: 'Requisição de laboratório salva.'
    }
  },
  common: {
    actions: 'Ações'
  },
  patients: {
    notes: {
      on_behalf_of_label: 'Em Nome de',
      on_behalf_of_copy: 'em nome de',
      please_select_a_visit: 'Por favor selecione o visitante',
      note_label: 'Nota'
    }
  }
};
