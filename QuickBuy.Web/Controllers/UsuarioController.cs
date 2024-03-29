﻿using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Entidades;
using QuickBuy.Dominio.Contratos;
using System;

namespace QuickBuy.Web.Controllers
{
    [Route("api/[controller]")]
    public class UsuarioController : Controller
    {
        
        private readonly IUsuarioRepositorio _usuarioRepositorio;
        public UsuarioController(IUsuarioRepositorio usuarioRepositorio)
        {
            _usuarioRepositorio = usuarioRepositorio;
        }
        

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost("VerificarUsuario")]
        public IActionResult VerificarUsuario([FromBody] Usuario usuario)
        {
            try
            {
                var usuarioRetorno = _usuarioRepositorio.Obter(usuario.Email, usuario.Senha);
                if (usuarioRetorno != null)
                {
                    return Ok(usuarioRetorno);
                }

                return BadRequest("Usuário ou senha inválido.");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody] Usuario usuario)
        {
            try
            {
                var usuarioCadastrado = _usuarioRepositorio.Obter(usuario.Email);
                if (usuarioCadastrado != null)
                {
                    return BadRequest("Usuario já cadastrado no sistema");
                }

                _usuarioRepositorio.Adicionar(usuario);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }

            /*
             try
            {
                var usuarioCadastrado = _usuarioRepositorio.Obter(usuario.Email);
                
                if(usuarioCadastrado != null)                
                    return BadRequest("Usuario já cadastrado no sistema");

                usuarioCadastrado.Validate();

                if(!usuarioCadastrado.EhValido)
                    return BadRequest(usuarioCadastrado.ObterMensagensValidacao());

                //usuario.EhAdministrador = true;
                _usuarioRepositorio.Adicionar(usuario);

                return Ok();

            }catch(Exception ex)
            {
                return BadRequest(ex.ToString());
            }
             */

        }
    }
}
