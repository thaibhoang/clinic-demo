export interface DentalService {
  id: string;
  name: string;
  category: 'cosmetic' | 'orthodontics' | 'implant' | 'general';
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  priceStartingAt: number; // VND
  priceFormatted: string;
  unit: string;
  duration: string;
  warranty: string;
  technology: string;
  suitableFor: string[];
  steps: {
    step: number;
    title: string;
    desc: string;
  }[];
}

export interface PriceItem {
  id: string;
  category: 'cosmetic' | 'orthodontics' | 'implant' | 'general';
  categoryLabel: string;
  name: string;
  originalPrice: number;
  salePrice: number;
  unit: string;
  warranty: string;
  note?: string;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  experience: string;
  degrees: string[];
  specialty: string;
  avatarColor: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  occupation: string;
  serviceId: string;
  serviceName: string;
  rating: number;
  date: string;
  comment: string;
  beforeAfterSummary: string;
  verified: boolean;
}

export interface BeforeAfterCase {
  id: string;
  patient: string;
  age: number;
  treatment: string;
  duration: string;
  initialState: string;
  resultState: string;
  notes: string;
  teethCount?: number;
}

export const CLINIC_LOCATIONS = [
  {
    id: 'hcm',
    name: 'Chi nhánh Quận 3 - TP. Hồ Chí Minh',
    address: '128 Nguyễn Đình Chiểu, Phường Võ Thị Sáu, Quận 3, TP.HCM',
    phone: '028 7300 8888',
    hours: '08:00 - 20:00 (Tất cả các ngày)',
  },
  {
    id: 'hn',
    name: 'Chi nhánh Hoàn Kiếm - Hà Nội',
    address: '45 Tràng Thi, Phường Hàng Trống, Quận Hoàn Kiếm, Hà Nội',
    phone: '024 7300 8888',
    hours: '08:00 - 20:00 (Tất cả các ngày)',
  },
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-thai',
    name: 'ThS.BSCKI Nguyễn Hoàng Thái',
    role: 'Giám Đốc Chuyên Môn - Chuyên gia Implant & Phục hình',
    experience: '16 năm kinh nghiệm',
    degrees: [
      'Thạc sĩ Răng Hàm Mặt - ĐH Y Dược TP.HCM',
      'Chứng chỉ Chuyên sâu Implant Straumann (Thụy Sĩ)',
      'Thành viên Hiệp hội Cấy ghép Nha khoa Quốc tế (ITI)',
    ],
    specialty: 'Cấy ghép Implant, Phục hình răng sứ toàn phần, Vi phẫu ghép xương',
    avatarColor: 'from-teal-600 to-emerald-800',
    bio: 'Đã thực hiện thành công hơn 3.500 ca cấy ghép Implant và All-on-4/All-on-6 phức tạp, tiên phong ứng dụng kỹ thuật phẫu thuật không lật vạt ít xâm lấn.',
  },
  {
    id: 'dr-mai',
    name: 'BSCKI Lê Hoàng Mai Chi',
    role: 'Trưởng Khoa Chỉnh Nha & Thẩm Mỹ Nụ Cười',
    experience: '12 năm kinh nghiệm',
    degrees: [
      'Bác sĩ Chuyên khoa I - ĐH Y Hà Nội',
      'Bác sĩ Hạng Kim Cương Diamond Invisalign Provider',
      'Chứng chỉ Chỉnh nha Sinh học MEAW (Nhật Bản)',
    ],
    specialty: 'Niềng răng trong suốt Invisalign, Chỉnh nha mặt lưỡi, Dán sứ Veneer Ultrathin',
    avatarColor: 'from-amber-600 to-teal-700',
    bio: 'Chuyên gia thiết kế nụ cười DSD (Digital Smile Design). Đã mang lại nụ cười rạng rỡ chuẩn tỉ lệ vàng cho hơn 2.000 khách hàng chỉnh nha.',
  },
  {
    id: 'dr-vu',
    name: 'ThS.BS Trần Anh Vũ',
    role: 'Bác Sĩ Trưởng Điều Trị & Phẫu Thuật Trong Miệng',
    experience: '10 năm kinh nghiệm',
    degrees: [
      'Thạc sĩ Phẫu thuật Hàm mặt - ĐH Y Dược TP.HCM',
      'Tu nghiệp Nội nha Vi phẫu Kính hiển vi Carl Zeiss (CHLB Đức)',
      'Chứng chỉ Phẫu thuật Siêu âm Piezotome',
    ],
    specialty: 'Nhổ răng khôn không đau Piezotome, Điều trị tủy vi phẫu, Tiểu phẫu lợi',
    avatarColor: 'from-cyan-700 to-blue-900',
    bio: 'Nổi tiếng với thao tác nhẹ nhàng, chuẩn xác từng milimet, giúp khách hàng hoàn toàn giải tỏa nỗi sợ đau khi can thiệp nha khoa.',
  },
];

export const SERVICES: DentalService[] = [
  {
    id: 'invisalign',
    name: 'Niềng Răng Trong Suốt Invisalign',
    category: 'orthodontics',
    categoryLabel: 'Chỉnh nha',
    shortDesc: 'Khay niềng gần như vô hình từ Hoa Kỳ, tháo lắp dễ dàng, thấy trước kết quả 3D với máy quét iTero 5D.',
    fullDesc: 'Giải pháp chỉnh nha thẩm mỹ số 1 thế giới. Sử dụng hệ thống khay trong suốt SmartTrack ôm sát thân răng, điều chỉnh răng nhẹ nhàng, giảm 50% số lần tái khám so với mắc cài truyền thống.',
    priceStartingAt: 45000000,
    priceFormatted: 'Từ 45.000.000 đ',
    unit: 'Trọn gói / ca',
    duration: '12 - 20 tháng',
    warranty: 'Cam kết theo lộ trình ClinCheck 3D',
    technology: 'Quét dấu răng iTero Element 5D + Phần mềm lập kế hoạch ClinCheck 3D',
    suitableFor: [
      'Răng khấp khểnh, chen chúc, mọc lệch',
      'Răng hô móm mức độ nhẹ đến trung bình',
      'Người cần giao tiếp nhiều, làm việc trước công chúng',
      'Khách hàng ngại mang mắc cài kim loại vướng víu',
    ],
    steps: [
      { step: 1, title: 'Thăm khám & Quét 3D', desc: 'Quét khớp cắn iTero 5D và mô phỏng tức thì nụ cười sau khi niềng.' },
      { step: 2, title: 'Lập kế hoạch ClinCheck', desc: 'Bác sĩ thiết kế dịch chuyển từng chiếc răng chi tiết theo tuần.' },
      { step: 3, title: 'Nhận khay & Đeo định kỳ', desc: 'Thay khay mỗi 1-2 tuần tại nhà, tái khám 6-8 tuần/lần.' },
      { step: 4, title: 'Hoàn thiện & Hàm duy trì', desc: 'Tháo chốt attachment, đánh bóng và cấp khay Vivera bảo vệ nụ cười.' },
    ],
  },
  {
    id: 'veneer',
    name: 'Dán Sứ Veneer Ultrathin Không Mài Nhỏ',
    category: 'cosmetic',
    categoryLabel: 'Thẩm mỹ',
    shortDesc: 'Mặt dán sứ siêu mỏng chỉ 0.2 - 0.5mm, bảo tồn tối đa 99% răng thật, màu sắc tự nhiên trong bóng.',
    fullDesc: 'Kỹ thuật thẩm mỹ bảo tồn cao cấp nhất hiện nay. Sử dụng chất liệu sứ thủy tinh Lithium Disilicate (Emax Press Thụy Sĩ) có độ cứng gấp 4 lần răng thật, chịu lực ăn nhai hoàn hảo mà không cần mài răng.',
    priceStartingAt: 6500000,
    priceFormatted: 'Từ 6.500.000 đ',
    unit: 'Chiếc',
    duration: '2 - 3 buổi hẹn',
    warranty: 'Bảo hành chính hãng 15 năm',
    technology: 'Hệ thống CAD/CAM Milling Robot 5 trục & Công nghệ DSD tỉ lệ vàng',
    suitableFor: [
      'Răng ố vàng, nhiễm kháng sinh Tetracycline không thể tẩy trắng',
      'Răng thưa, hở kẽ nhẹ, hình thể răng không đều',
      'Răng mẻ, nứt vỡ cạnh cắn nhẹ',
      'Khách hàng muốn có nụ cười tỏa sáng tự nhiên nhất',
    ],
    steps: [
      { step: 1, title: 'Thiết kế nụ cười DSD', desc: 'Chụp hình Studio, phân tích tỉ lệ khuôn mặt và làm Smile Mock-up thử nụ cười.' },
      { step: 2, title: 'Chuẩn bị bề mặt siêu vi', desc: 'Chỉ tạo nhám siêu mỏng 0.2mm, lấy dấu quang học không gây khó chịu.' },
      { step: 3, title: 'Chế tác Labo thủ công', desc: 'Nghệ nhân đắp lớp men đa tầng tạo độ phản quang tự nhiên.' },
      { step: 4, title: 'Dán cố định vĩnh viễn', desc: 'Sử dụng keo dán sinh học Variolink Esthetic kết nối nguyên khối.' },
    ],
  },
  {
    id: 'implant',
    name: 'Cấy Ghép Implant Thụy Sĩ Straumann',
    category: 'implant',
    categoryLabel: 'Trồng răng',
    shortDesc: 'Phục hồi răng đã mất cả chân và thân răng, khôi phục 100% lực ăn nhai, bảo hành trọn đời toàn cầu.',
    fullDesc: 'Tiêu chuẩn vàng trong phục hình mất răng. Trụ Titanium siêu tinh khiết với bề mặt sinh học SLActive độc quyền kích thích tích hợp xương hàm nhanh gấp 2 lần, ngăn ngừa hoàn toàn tình trạng tiêu xương và tụt lợi.',
    priceStartingAt: 18000000,
    priceFormatted: 'Từ 18.000.000 đ',
    unit: 'Trụ hoàn chỉnh',
    duration: '3 - 6 tuần',
    warranty: 'Bảo hành trọn đời trên toàn thế giới',
    technology: 'Chụp phim CT Cone Beam 3D + Máng dẫn phẫu thuật số Navigation',
    suitableFor: [
      'Mất 1 hoặc nhiều răng riêng lẻ',
      'Mất toàn bộ hàm răng (áp dụng giải pháp All-on-4/6)',
      'Hỏng cầu răng sứ cũ hoặc chán dùng hàm giả tháo lắp',
      'Muốn ăn nhai thoải mái không lo bung rơi',
    ],
    steps: [
      { step: 1, title: 'Chụp CT ConeBeam 3D', desc: 'Đo mật độ xương hàm và lên vị trí cấy ghép chuẩn xác từng milimet.' },
      { step: 2, title: 'Đặt trụ Implant nhẹ nhàng', desc: 'Tiểu phẫu vi phẫu chỉ 15 phút/trụ, không đau nhờ công nghệ gây tê cục bộ.' },
      { step: 3, title: 'Tích hợp xương', desc: 'Gắn răng tạm thẩm mỹ để giao tiếp bình thường trong thời gian lành thương.' },
      { step: 4, title: 'Lắp mão sứ cố định', desc: 'Lắp mão toàn sứ Zirconia/Emax vĩnh viễn, ăn nhai chắc chắn trọn đời.' },
    ],
  },
  {
    id: 'teeth-whitening',
    name: 'Tẩy Trắng Răng Laser Zoom WhiteSpeed (Mỹ)',
    category: 'cosmetic',
    categoryLabel: 'Thẩm mỹ',
    shortDesc: 'Bật 4 - 8 tông màu chỉ sau 60 phút, không ê buốt nhờ ánh sáng lạnh LED dịu nhẹ và gel bù khoáng ACP.',
    fullDesc: 'Công nghệ tẩy trắng răng số 1 tại Hoa Kỳ. Năng lượng ánh sáng quang phổ xanh kích hoạt gel tẩy trắng bẻ gãy các liên kết protein sắc tố sâu trong men răng mà không gây tổn thương ngà răng hay nướu.',
    priceStartingAt: 2500000,
    priceFormatted: '2.500.000 đ',
    unit: 'Gói 2 hàm',
    duration: '60 phút',
    warranty: 'Bảo hành duy trì độ sáng 12 tháng',
    technology: 'Đèn Philips Zoom WhiteSpeed thế hệ mới nhất với 3 mức cường độ',
    suitableFor: [
      'Răng xỉn màu do cà phê, trà, thuốc lá, thực phẩm sẫm màu',
      'Răng ố vàng theo thời gian tự nhiên',
      'Cần nụ cười trắng sáng tức thì cho đám cưới, sự kiện, chụp ảnh',
      'Khách hàng răng nhạy cảm sợ ê buốt',
    ],
    steps: [
      { step: 1, title: 'Thăm khám & Vệ sinh', desc: 'Lấy sạch vôi răng và so bảng màu Vita để xác định tông màu ban đầu.' },
      { step: 2, title: 'Bảo vệ nướu & Môi', desc: 'Cách ly môi, nướu bằng hoạt chất Dam mềm dẻo bảo vệ 100% nướu.' },
      { step: 3, title: 'Chiếu đèn Zoom 3 chu kỳ', desc: 'Thoa gel và chiếu đèn LED 15 phút x 3 hiệp dưới sự giám sát của bác sĩ.' },
      { step: 4, title: 'Thoa gel khoáng & Hoàn tất', desc: 'Thoa gel khoáng Relif chống ê buốt và hướng dẫn giữ màu.' },
    ],
  },
  {
    id: 'piezotome',
    name: 'Nhổ Răng Khôn Không Đau Piezotome',
    category: 'general',
    categoryLabel: 'Điều trị',
    shortDesc: 'Sóng siêu âm cao tần cắt tách chọn lọc mô cứng, không tổn thương mô mềm, lành thương thần tốc.',
    fullDesc: 'Giải pháp nhổ răng khôn hiện đại thay thế hoàn toàn kìm và bẩy truyền thống. Tần số sóng siêu âm 28 - 36 kHz tác động chính xác chỉ làm đứt dây chằng nha chu, giúp lấy răng nhẹ nhàng trong 10-15 phút.',
    priceStartingAt: 1200000,
    priceFormatted: 'Từ 1.200.000 đ',
    unit: 'Răng',
    duration: '15 - 30 phút',
    warranty: 'Theo dõi & Cắt chỉ miễn phí',
    technology: 'Máy phẫu thuật siêu âm Piezotome Acteon (Pháp) + Màng PRF tự thân',
    suitableFor: [
      'Răng khôn mọc lệch, mọc ngầm, đâm ngang gây đau nhức',
      'Răng khôn giắt thức ăn gây sâu răng số 7',
      'Răng khôn gây viêm nướu trùm, sưng má',
      'Khách hàng cần nhổ răng để niềng răng',
    ],
    steps: [
      { step: 1, title: 'Chụp X-quang Pano & CT', desc: 'Xác định chính xác hướng mọc và khoảng cách với dây thần kinh hàm dưới.' },
      { step: 2, title: 'Gây tê đa điểm không buốt', desc: 'Gây tê bằng kim siêu nhỏ và thuốc tê ngoại nhập cao cấp.' },
      { step: 3, title: 'Tách răng bằng sóng siêu âm', desc: 'Đầu rung siêu âm lướt nhẹ nhàng mở lối đưa răng ra ngoài không đau.' },
      { step: 4, title: 'Ghép màng PRF lành thương', desc: 'Đặt huyết tương giàu tiểu cầu PRF giúp cầm máu tức thì và chống sưng.' },
    ],
  },
  {
    id: 'ceramic-crown',
    name: 'Bọc Răng Sứ Toàn Sứ Cao Cấp Zirconia / Emax',
    category: 'cosmetic',
    categoryLabel: 'Thẩm mỹ',
    shortDesc: 'Răng toàn sứ 100% không kim loại, không đen viền nướu, màu sắc trong bóng tự nhiên như răng thật.',
    fullDesc: 'Phục hồi hoàn hảo hình thể và chức năng ăn nhai cho các răng bị sâu vỡ lớn, sau điều trị tủy hoặc đổi màu nặng. Phôi sứ chính hãng nhập khẩu Đức/Thụy Sĩ cắt gọt bằng robot CAD/CAM chính xác từng micromet.',
    priceStartingAt: 3500000,
    priceFormatted: 'Từ 3.500.000 đ',
    unit: 'Răng',
    duration: '2 - 3 ngày',
    warranty: 'Bảo hành điện tử 10 - 20 năm',
    technology: 'Phôi sứ nguyên khối Katana (Nhật) / Cercon HT (Đức) / Emax (Thụy Sĩ)',
    suitableFor: [
      'Răng đã lấy tủy giòn dễ gãy vỡ',
      'Răng sâu mẻ lớn không thể trám composite',
      'Răng khấp khểnh nhẹ không muốn niềng lâu',
      'Thay thế răng sứ kim loại cũ bị đen nướu',
    ],
    steps: [
      { step: 1, title: 'Khám & Sửa soạn cùi răng', desc: 'Bảo tồn tối đa mô răng, mài đường hoàn tất bờ cong sinh học.' },
      { step: 2, title: 'Lấy dấu số & Răng tạm', desc: 'Quét kỹ thuật số và gắn răng tạm thẩm mỹ ngay trong ngày.' },
      { step: 3, title: 'Chế tác Labo công nghệ cao', desc: 'Thiết kế CAD/CAM và nướng kết tinh thể tạo độ bóng tuyệt hảo.' },
      { step: 4, title: 'Thử khớp & Gắn vĩnh viễn', desc: 'Kiểm tra khớp cắn ăn nhai êm ái trước khi dán keo sinh học vĩnh viễn.' },
    ],
  },
];

export const PRICE_LIST: PriceItem[] = [
  // Chỉnh nha
  { id: 'p-invis-full', category: 'orthodontics', categoryLabel: 'Chỉnh nha', name: 'Niềng răng trong suốt Invisalign Comprehensive (Toàn diện)', originalPrice: 95000000, salePrice: 79000000, unit: 'Trọn gói / 2 hàm', warranty: 'Trọn đời kế hoạch', note: 'Tặng kèm khay duy trì Vivera trị giá 10tr' },
  { id: 'p-invis-mod', category: 'orthodontics', categoryLabel: 'Chỉnh nha', name: 'Niềng răng trong suốt Invisalign Moderate (Trung bình)', originalPrice: 65000000, salePrice: 55000000, unit: 'Trọn gói / 2 hàm', warranty: 'Trọn gói liệu trình' },
  { id: 'p-ortho-metal', category: 'orthodontics', categoryLabel: 'Chỉnh nha', name: 'Niềng răng mắc cài kim loại tự buộc 3M (Mỹ)', originalPrice: 42000000, salePrice: 32000000, unit: 'Trọn gói / 2 hàm', warranty: 'Bảo hành kết quả' },
  { id: 'p-ortho-ceramic', category: 'orthodontics', categoryLabel: 'Chỉnh nha', name: 'Niềng răng mắc cài sứ pha lê thông minh', originalPrice: 52000000, salePrice: 42000000, unit: 'Trọn gói / 2 hàm', warranty: 'Bảo hành kết quả' },
  
  // Thẩm mỹ răng sứ & Veneer
  { id: 'p-veneer-emax', category: 'cosmetic', categoryLabel: 'Thẩm mỹ', name: 'Dán sứ Veneer Emax Press (Thụy Sĩ)', originalPrice: 8500000, salePrice: 6500000, unit: 'Răng', warranty: '15 năm chính hãng', note: 'Bảo tồn 99% răng thật' },
  { id: 'p-veneer-lami', category: 'cosmetic', categoryLabel: 'Thẩm mỹ', name: 'Dán sứ Veneer Siêu mỏng Ultrathin Lisi (Nhật Bản)', originalPrice: 11000000, salePrice: 8900000, unit: 'Răng', warranty: '20 năm chính hãng', note: 'Độ mỏng 0.2mm tự nhiên' },
  { id: 'p-crown-cercon', category: 'cosmetic', categoryLabel: 'Thẩm mỹ', name: 'Bọc răng toàn sứ Cercon HT (Đức)', originalPrice: 5500000, salePrice: 3800000, unit: 'Răng', warranty: '10 năm chính hãng' },
  { id: 'p-crown-katana', category: 'cosmetic', categoryLabel: 'Thẩm mỹ', name: 'Bọc răng toàn sứ Katana Zirconia (Nhật Bản)', originalPrice: 4000000, salePrice: 2800000, unit: 'Răng', warranty: '8 năm chính hãng' },
  { id: 'p-zoom-white', category: 'cosmetic', categoryLabel: 'Thẩm mỹ', name: 'Tẩy trắng răng Laser Philips Zoom WhiteSpeed', originalPrice: 3500000, salePrice: 2490000, unit: 'Gói 2 hàm', warranty: '12 tháng', note: 'Bao gồm máng và thuốc dưỡng trắng' },

  // Cấy ghép Implant
  { id: 'p-imp-straumann', category: 'implant', categoryLabel: 'Trồng răng', name: 'Trụ Implant Straumann SLA Active (Thụy Sĩ)', originalPrice: 35000000, salePrice: 29000000, unit: 'Trụ', warranty: 'Trọn đời toàn cầu', note: 'Tích hợp xương chỉ sau 3-4 tuần' },
  { id: 'p-imp-nobel', category: 'implant', categoryLabel: 'Trồng răng', name: 'Trụ Implant Nobel Biocare Active (Mỹ)', originalPrice: 30000000, salePrice: 24500000, unit: 'Trụ', warranty: 'Trọn đời toàn cầu' },
  { id: 'p-imp-dentium', category: 'implant', categoryLabel: 'Trồng răng', name: 'Trụ Implant Dentium SuperLine (Hàn Quốc/Mỹ)', originalPrice: 18000000, salePrice: 13500000, unit: 'Trụ', warranty: '20 năm' },
  { id: 'p-imp-allon4', category: 'implant', categoryLabel: 'Trồng răng', name: 'Phục hình mất răng toàn hàm All-on-4', originalPrice: 160000000, salePrice: 130000000, unit: 'Hàm', warranty: 'Bảo hành trọn đời' },

  // Nha khoa điều trị & tổng quát
  { id: 'p-piezo-wis', category: 'general', categoryLabel: 'Điều trị', name: 'Nhổ răng khôn mọc lệch bằng sóng siêu âm Piezotome', originalPrice: 2500000, salePrice: 1500000, unit: 'Răng', warranty: 'Chăm sóc trọn đời', note: 'Không sưng đau, tặng màng PRF' },
  { id: 'p-root-micro', category: 'general', categoryLabel: 'Điều trị', name: 'Điều trị tủy vi phẫu kính hiển vi chuyên sâu', originalPrice: 2000000, salePrice: 1400000, unit: 'Răng', warranty: '5 năm' },
  { id: 'p-clean-cavitron', category: 'general', categoryLabel: 'Điều trị', name: 'Lấy cao răng & Đánh bóng siêu âm Cavitron Plus', originalPrice: 400000, salePrice: 199000, unit: 'Lần', warranty: 'Miễn phí kiểm tra 6 tháng' },
  { id: 'p-filling-comp', category: 'general', categoryLabel: 'Điều trị', name: 'Trám răng thẩm mỹ Composite quang trùng hợp 3M', originalPrice: 500000, salePrice: 350000, unit: 'Vị trí', warranty: '2 năm' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Nguyễn Thị Hải Yến',
    age: 28,
    occupation: 'MC & Biên tập viên Đài truyền hình',
    serviceId: 'invisalign',
    serviceName: 'Niềng răng trong suốt Invisalign',
    rating: 5,
    date: '15/09/2026',
    comment: 'Là một MC, nụ cười là “vũ khí” quan trọng nhất của mình. Lúc đầu mình rất lo niềng răng sẽ ảnh hưởng việc dẫn sóng, nhưng khay Invisalign tại Aura gần như tàng hình, không một khán giả nào nhận ra. Bác sĩ Chi theo dõi rất sát sao, chỉ sau 14 tháng hàm răng khấp khểnh của mình đã đều tăm tắp!',
    beforeAfterSummary: 'Khắc phục răng khấp khểnh hàm trên, đưa cung cười cân đối chuẩn nhân trắc học.',
    verified: true,
  },
  {
    id: 'rev-2',
    name: 'Trần Minh Hoàng',
    age: 46,
    occupation: 'Giám đốc Điều hành Doanh nghiệp Xuất nhập khẩu',
    serviceId: 'implant',
    serviceName: 'Cấy ghép Implant Straumann Thụy Sĩ',
    rating: 5,
    date: '02/10/2026',
    comment: 'Tôi bị mất 2 răng hàm dưới suốt 3 năm, ăn nhai lệch hẳn một bên và bắt đầu đau khớp thái dương hàm. Đến Aura được ThS.BS Thái trực tiếp cấy trụ Straumann bằng máng định vị 3D. Cả quá trình làm chưa đầy 30 phút, tối về tôi ăn cháo nhẹ và hôm sau đi làm bình thường, không sốt không sưng.',
    beforeAfterSummary: 'Phục hồi trọn vẹn 2 răng cối số 6 hàm dưới, khôi phục 100% lực nhai tự nhiên.',
    verified: true,
  },
  {
    id: 'rev-3',
    name: 'Phan Thảo Nguyên',
    age: 31,
    occupation: 'Nhà thiết kế nội thất',
    serviceId: 'veneer',
    serviceName: 'Dán sứ Veneer Emax Press 16 răng',
    rating: 5,
    date: '28/08/2026',
    comment: 'Điều mình ưng ý nhất ở Aura là triết lý bảo tồn răng thật. Bác sĩ không mài nhỏ răng thành cọc nhọn như nhiều nơi quảng cáo, mà chỉ tạo nhám siêu mỏng. Màu sứ trong trẻo tự nhiên, viền nướu hồng hào khít khao không hề bị hôi hay đọng thức ăn. Cảm ơn bác sĩ Chi rất nhiều!',
    beforeAfterSummary: 'Đổi mới nụ cười từ men răng ố vàng nhiễm màu sang nụ cười rạng rỡ tự nhiên chuẩn DSD.',
    verified: true,
  },
  {
    id: 'rev-4',
    name: 'Đặng Quốc Huy',
    age: 24,
    occupation: 'Kỹ sư Phần mềm',
    serviceId: 'piezotome',
    serviceName: 'Nhổ 2 răng khôn mọc ngầm bằng Piezotome',
    rating: 5,
    date: '10/10/2026',
    comment: 'Tôi là người cực kỳ sợ kim tiêm và sợ đau. Nhưng lúc nhổ răng ở Aura, bác sĩ bôi thuốc tê trước rồi mới chích kim siêu vi nên không có cảm giác gì. Tiếng máy siêu âm Piezotome êm ru, 15 phút là xong 2 cái răng khôn mọc ngang 90 độ. Về uống đúng liều thuốc là hết êm, tối ngủ ngon lành.',
    beforeAfterSummary: 'Nhổ sạch 2 răng khôn mọc ngang nguy hiểm, ngăn ngừa hỏng răng số 7 lân cận.',
    verified: true,
  },
  {
    id: 'rev-5',
    name: 'Vũ Ngọc Bích Trâm',
    age: 35,
    occupation: 'Chủ chuỗi Thời trang & Spa',
    serviceId: 'teeth-whitening',
    serviceName: 'Tẩy trắng Laser Philips Zoom WhiteSpeed',
    rating: 5,
    date: '18/10/2026',
    comment: 'Răng mình trước đây rất nhạy cảm, từng tẩy trắng ở chỗ khác bị buốt tận óc suốt 2 ngày. Nhưng qua Aura dùng máy Philips Zoom thế hệ mới thì chỉ hơi châm chích nhẹ 5 phút cuối. Răng bật lên 5 tông màu, trắng sáng tự nhiên không bị giả tạo. 10 điểm cho sự tận tâm của điều dưỡng!',
    beforeAfterSummary: 'Bật 5 tông màu men răng, nụ cười tươi tắn tự tin trước thềm sự kiện lớn.',
    verified: true,
  },
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'case-1',
    patient: 'Chị Mai Lan (32 tuổi)',
    age: 32,
    treatment: 'Dán sứ Veneer Emax Press Thụy Sĩ',
    duration: '2 buổi hẹn (3 ngày)',
    initialState: 'Men răng ố vàng sậm màu bẩm sinh, răng cửa thưa nhẹ 1.5mm, rìa cắn mẻ không đều.',
    resultState: 'Dán 16 mặt sứ siêu mỏng 0.2mm, tạo hình nụ cười chữ U chuẩn phong thủy, men răng trong trẻo bóng tự nhiên.',
    notes: 'Bảo tồn 100% tủy răng sống, không mài nhỏ mô răng.',
    teethCount: 16,
  },
  {
    id: 'case-2',
    patient: 'Anh Minh Tuấn (27 tuổi)',
    age: 27,
    treatment: 'Niềng răng trong suốt Invisalign Comprehensive',
    duration: '16 tháng (32 cặp khay)',
    initialState: 'Răng khấp khểnh chen chúc nặng ở cả 2 cung hàm, khớp cắn sâu 4mm làm nụ cười bị hẹp.',
    resultState: 'Cung răng đều tăm tắp, chỉnh khớp cắn đạt chuẩn lồng múi tối đa, góc nghiêng khuôn mặt thon gọn tự nhiên.',
    notes: 'Không cần nhổ răng số 4, chỉ tạo khoảng IPR kẽ vi phẫu.',
  },
  {
    id: 'case-3',
    patient: 'Chú Thanh Hải (58 tuổi)',
    age: 58,
    treatment: 'Trồng răng Implant Straumann SLActive',
    duration: '4 tuần tích hợp',
    initialState: 'Mất 3 răng hàm ăn nhai nhiều năm, tiêu xương ổ răng vùng răng cối, ăn uống khó tiêu hóa.',
    resultState: 'Cấy ghép 3 trụ Implant kết hợp ghép bột xương nhân tạo, phục hình răng sứ Zirconia nguyên khối chịu lực cao.',
    notes: 'Ăn nhai thịt bò, đồ cứng hoàn toàn như răng thật.',
  },
];

export const FAQS = [
  {
    question: 'Đặt lịch khám trực tuyến tại Aura Dental có mất phí không?',
    answer: 'Hoàn toàn KHÔNG mất phí. Khi đặt hẹn online, bạn còn được tặng gói Thăm khám tổng quát & Chụp phim X-Quang 3D Cone Beam trị giá 500.000đ, đồng thời được ưu tiên giữ lịch với Bác sĩ Trưởng khoa mà không phải chờ đợi.',
  },
  {
    question: 'Nha khoa có hỗ trợ thanh toán trả góp 0% lãi suất không?',
    answer: 'Có! Aura Dental liên kết với hơn 25 ngân hàng lớn (Vietcombank, Techcombank, VPBank, Sacombank...) hỗ trợ trả góp 0% lãi suất kỳ hạn linh hoạt 6 - 12 - 24 tháng cho tất cả dịch vụ Niềng răng, Răng sứ thẩm mỹ và Cấy ghép Implant. Thủ tục xét duyệt chỉ mất 5 phút.',
  },
  {
    question: 'Làm răng sứ hoặc dán Veneer có phải mài nhỏ răng thật không?',
    answer: 'Tại Aura, chúng tôi theo đuổi triết lý "Nha khoa bảo tồn tối đa". Với công nghệ Dán sứ Veneer Ultrathin, răng thật được bảo tồn tới 99% (chỉ xử lý nhám vi thể 0.2 - 0.5mm bề mặt men). Với bọc sứ, bác sĩ mài đường hoàn tất bờ cong sinh học siêu mỏng, không xâm lấn tủy răng.',
  },
  {
    question: 'Nhổ răng khôn bằng sóng siêu âm Piezotome có thật sự không đau?',
    answer: 'Chính xác. Sóng siêu âm Piezotome hoạt động ở tần số chọn lọc chỉ tác động lên mô cứng quanh chân răng mà không làm tổn thương mạch máu và dây thần kinh lân cận. Kết hợp kỹ thuật gây tê không đau và màng huyết tương giàu tiểu cầu PRF giúp vết nhổ lành nhanh gấp đôi, không sưng má.',
  },
  {
    question: 'Chế độ bảo hành dịch vụ tại Aura Dental như thế nào?',
    answer: 'Mọi dịch vụ tại Aura đều có thẻ bảo hành điện tử chính hãng có mã QR tra cứu toàn cầu: Implant bảo hành trọn đời, Dán sứ & Bọc sứ bảo hành 10 - 20 năm, Niềng răng cam kết hiệu quả bằng hợp đồng văn bản pháp lý minh bạch.',
  },
];
