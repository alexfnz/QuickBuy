﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    public abstract class Entidade
    {
        private List<string> _mensagensValidao { get; set; }

        private List<string> mensagemValidacao
        {
            get { return _mensagensValidao ?? (_mensagensValidao = new List<string>());  }
        }

        public void LimparMensagensValidacao()
        {
            mensagemValidacao.Clear();
        }

        protected void AdicionarCritica(string mensagem)
        {
            mensagemValidacao.Add(mensagem);
        }

        public abstract void Validate();

        protected bool EhValido
        {
            get { return !mensagemValidacao.Any(); }
        }
    }
}
