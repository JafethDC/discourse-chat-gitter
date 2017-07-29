class GitterBotEnabledValidator
  def initialize(opts = {})
    @opts = opts
  end

  def valid_value?(val)
    if val == 'f'
      GitterBot.stop
      true
    else
      return false unless SiteSetting.gitter_bot_user_token.present?
      GitterBot.stop
      GitterBot.init
      true
    end
  end

  def error_message
    I18n.t('site_settings.errors.gitter_bot_user_token_empty')
  end
end