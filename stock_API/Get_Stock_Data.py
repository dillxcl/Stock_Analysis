import requests
from bs4 import BeautifulSoup
from lxml import html
import numpy as np



#date_list, price, volume= yahoo.get_history('AC.TO')

def get_ticker(ticker):
    main_url = "https://ca.finance.yahoo.com/quote/" + str(ticker)
    headers = {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
    }
    main_page = requests.get(main_url, headers = headers)
    main_tree = html.fromstring(main_page.content)

    current_price = main_tree.xpath('//*[@id="quote-header-info"]/div[3]/div/div/span[1]')[0].text_content().strip()
    previous_close = main_tree.xpath('//*[@id="quote-summary"]/div[1]/table/tbody/tr[1]/td[2]/span')[0].text_content().strip()
    current_open = main_tree.xpath('//*[@id="quote-summary"]/div[1]/table/tbody/tr[2]/td[2]/span')[0].text_content().strip()
    ask = main_tree.xpath('//*[@id="quote-summary"]/div[1]/table/tbody/tr[4]/td[2]/span')[0].text_content().strip()
    today_range = main_tree.xpath('//*[@id="quote-summary"]/div[1]/table/tbody/tr[5]/td[2]')[0].text_content().strip()
    fifty_two_week_range = main_tree.xpath('//*[@id="quote-summary"]/div[1]/table/tbody/tr[6]/td[2]')[0].text_content().strip()
    volume = main_tree.xpath('//*[@id="quote-summary"]/div[1]/table/tbody/tr[7]/td[1]/span')[0].text_content().strip()
    average_volume = main_tree.xpath('//*[@id="quote-summary"]/div[1]/table/tbody/tr[8]/td[2]/span')[0].text_content().strip()
    market_cap = main_tree.xpath('//*[@id="quote-summary"]/div[2]/table/tbody/tr[1]/td[2]/span')[0].text_content().strip()
    beta = main_tree.xpath('//*[@id="quote-summary"]/div[2]/table/tbody/tr[2]/td[2]/span')[0].text_content().strip()
    pe_ratio = main_tree.xpath('//*[@id="quote-summary"]/div[2]/table/tbody/tr[3]/td[2]')[0].text_content().strip()
    eps = main_tree.xpath('//*[@id="quote-summary"]/div[2]/table/tbody/tr[4]/td[2]/span')[0].text_content().strip()
    earnings_date = main_tree.xpath('//*[@id="quote-summary"]/div[2]/table/tbody/tr[5]/td[2]/span')[0].text_content().strip()
    forward_dividend_yield = main_tree.xpath('//*[@id="quote-summary"]/div[2]/table/tbody/tr[6]/td[2]')[0].text_content().strip()
    # ex_divident_date = main_tree.xpath('//*[@id="quote-summary"]/div[2]/table/tbody/tr[7]/td[2]/span')[0].text_content().strip()
    one_year_est = main_tree.xpath('//*[@id="quote-summary"]/div[2]/table/tbody/tr[8]/td[2]/span')[0].text_content().strip()

    stats_url = "https://ca.finance.yahoo.com/quote/BA/key-statistics?p=" + str(ticker)
    stats_page = requests.get(stats_url, headers = headers)
    
    stats_tree = html.fromstring(stats_page.content)
    price_per_book = stats_tree.xpath('//*[@id="Col1-0-KeyStatistics-Proxy"]/section/div[2]/div[1]/div/div/div/div/table/tbody/tr[8]/td[2]')[0].text_content().strip()
    '''
    current_ticker_dict = {
        "current_price": current_price,
        "previous_close": previous_close, 
        "current_open": current_open,
        "ask": ask,
        "today_range": today_range,
        "fifty_two_week_range": fifty_two_week_range,
        "volume": volume,
        "average_volume": average_volume,
        "market_cap": market_cap,
        "beta": beta,
        "pe_ratio": pe_ratio,
        "eps": eps,
        "earnings_date": earnings_date,
        "forward_dividend_yield": forward_dividend_yield,
        "one_year_est": one_year_est,
        "price_per_book": price_per_book
    }
    '''
    return eps, pe_ratio, volume


# Get the History Data from Yahoo Finance 
def get_history(ticker): 
    history_main_url = 'https://ca.finance.yahoo.com/quote/'+str(ticker)+'/history?p='+str(ticker)
    soup = BeautifulSoup(requests.get(history_main_url).content, "html.parser")
    table = soup.find('table')
    price = []
    date = []
    volume = []
    count = 0 
    
    for row in table.find_all("tr"):
        try:
            col = row.find_all("td")
            new_date = col[0].text.replace(",","")
            date.append(new_date.replace(".",""))
            price.append(col[4].text)
            volume.append(col[6].text.replace(",",""))
        except IndexError:
            continue
        if count > 90:
            break
        count+=1
 
    return date, price, volume
    