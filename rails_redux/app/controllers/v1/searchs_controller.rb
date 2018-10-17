module V1
  class SearchsController < ApplicationController
    require 'oxford_dictionary'
    skip_before_action :authenticate_user_from_token!, only: [:create,:suggest]
    def create
      client = OxfordDictionary::Client.new(app_id: '4958faf0', app_key: 'a2a95ad48b1307345150ed1b3fcfb65c')
      client = OxfordDictionary.new(app_id: '4958faf0', app_key: 'a2a95ad48b1307345150ed1b3fcfb65c')
      # filters = { lexicalCategory: 'Verb', domains: 'Art'}
      # render json: { result: client.search('condition', prefix: true) }
      # render json: { result: client.entry_pronunciations(search_params[:id]) }
      # client.wordlist(lexicalCategory: 'Noun', word_length: '>5,<10')
      return unless search_params[:id]
      render json: { result: client.entry(search_params[:id]).lexical_entries.entries }
      # render json: { result: client.search('en', prefix: true, limit: 10) }
    end

    def suggest
      client = OxfordDictionary::Client.new(app_id: '4958faf0', app_key: 'a2a95ad48b1307345150ed1b3fcfb65c')
      client = OxfordDictionary.new(app_id: '4958faf0', app_key: 'a2a95ad48b1307345150ed1b3fcfb65c')
      return unless search_params[:id]
      render json: { result: client.search(search_params[:id], prefix: true, limit: 10) }
    end

    private

    def search_params
      params.require(:search).permit(:id)
    end
  end
end