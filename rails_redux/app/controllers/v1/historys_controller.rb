module V1
  class HistorysController < ApplicationController
    def create
    	history = History.find_by user_id: current_user.id
    	history = History.create user_id: current_user.id if history.nil?
    	word = history.words.select {|word| word.word == historys_params[:word] }.first
    	if word.blank?
	    	word = history.words.build word: historys_params[:word], times: 1
	    	word.save
	    	return render json:	history.words
	    else
    		word.update_attributes times: word.times + 1
	    	return render json: history.words
	    end
    end

    def index
    	history = History.find_by user_id: current_user.id
        return unless history
        return render json: history.words
    end

    private
    def historys_params
    	params.require(:historys).permit(:word)
    end

  end
end